import React, { useMemo, useState } from 'react'

const data = [

  {
    imageLink: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Nike"
  }, 
  {
    imageLink: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Head phones"
  }, {
    imageLink: "https://images.unsplash.com/photo-1530745342582-0795f23ec976?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Vape"
  },{
    imageLink: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Apple Watch"
  },{
    imageLink: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Coco"
  },{
    imageLink: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Heels"
  },{
    imageLink: "https://images.unsplash.com/photo-1524883173980-67b26d34e82c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Under wear"
  },

]

function App() {

  const [searchTerm, setSearchTerm ] = useState("")


  // const filteredData = data.filter((item)=>{
    
  //     return item.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  // })


  

  
  const filteredData = useMemo(()=>{

       const myData = data.filter((item)=>{
    
      return item.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  })

  return myData

  }, [searchTerm])




  return (
    <div className='w-full min-h-screen bg-slate-800 flex flex-col items-center gap-10 p-20'>

      <input type="text" className='w-2xl py-2 px-3 border-none outline-none bg-white text-slate-600 text-md rounded-md' placeholder='Computer, Glass...'
      
        onChange={(e)=> setSearchTerm(e.target.value)}
      />


      {/* card parent*/}
      <div className='w-4xl flex flex-wrap gap-10'>
          {/* card */}
        {
          filteredData.map((element, index)=>(
            <div key={index} className='w-[30%] bg-slate-950/20 p-3 rounded-md'>
              <img src={element.imageLink} alt=""
                className='w-full  rounded-md'
              />
            <h2 className='text-xl mt-2 text-white'>{element.title}</h2>
          </div> 
          ))
        } 
     
      </div>
      
    </div>
  )
}

export default App
