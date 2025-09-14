import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { tableDB } from '../appwrite/Services'
import { toast } from 'sonner'

function Home() {

  const [blogs, setBlogs] = useState([])

  useEffect(()=>{
    (
      async () =>{
          const blogs = await tableDB.listRows(
            {
               databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
                tableId: import.meta.env.VITE_APPWRITE_TABLE_NAME,
                queries: []
            }
          )

          if(blogs){
            console.log(blogs);
            
            setBlogs(blogs.rows)
          }
      }
    )()
  }, [])
  
  

  return (
    <div className='w-full h-full flex flex-col items-center'>
      <h2 className='text-4xl font-bold mb-6 mt-4'>Latest Blogs</h2>
      <p className='text-gray-600 mb-8'>Stay updated with the latest trends and insights from our blog.</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto p-4 py-8'>
         {
          blogs.map((singleBlog)=>(
            <Card title={singleBlog.title} imageUrl={singleBlog.imageUrl} description={singleBlog.description} key={singleBlog.key}/>
          ))
         }
      </div>
    </div>
  )
}

export default Home
