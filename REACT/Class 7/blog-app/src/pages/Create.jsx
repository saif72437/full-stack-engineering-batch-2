import React, { useContext, useState } from 'react'
import { tableDB } from '../appwrite/Services'
import { ID } from 'appwrite' 
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext'

function Create() {

  const [imageUrl, setImageUrl]= useState("")
  const [title, setTitle]= useState("")
  const [description, setDescription]= useState("")

  const navigate = useNavigate()

  
  const {user} = useContext(UserContext)
  
  
  const handleCreateBlog = async () => {
    

   try {
     const blog = await tableDB.createRow({
       databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
       tableId: import.meta.env.VITE_APPWRITE_TABLE_NAME,
       rowId: ID.unique(),
       data: {
        userId: user.$id,
         imageUrl,
         title,
         description
       }
     });
 
 
     if(blog){
       toast.success("Blog is creating...")

       setTimeout(()=>{
        navigate("/")
       }, 3000)
 
     }
 
   } catch (error) {
      toast.error("Something went wrong", error.message)
   }
  }

  return (
    <div className='w-full h-screen bg-slate-300 flex item-center justify-center'>
      <div className="bg-white p-8 rounded shadow-md w-96 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Image URL"
          className="border p-2 rounded"
          value={imageUrl}
          onChange={(e)=> setImageUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Title"
          className="border p-2 rounded"
           value={title}
          onChange={(e)=> setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="border p-2 rounded resize-none h-24"
           value={description}
          onChange={(e)=> setDescription(e.target.value)}
        />
        <button onClick={handleCreateBlog} className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Create Blog
        </button>
      </div>
    </div>
  )
}

export default Create
