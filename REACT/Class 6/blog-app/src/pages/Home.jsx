import React from 'react'
import MyInput from '../components/MyInput'
import BlogCard from '../components/BlogCard'

function Home() {
  return (
    <div className='max-w-4xl  mx-auto mt-20 flex flex-col gap-10 items-center'>
        <MyInput placeholder={"Search..."} onChange={()=>{}} value={""} type={"search"}/>
          {/* blog card container */}
          <div className='w-full grid grid-cols-3 gap-4'>
              <BlogCard/>
              <BlogCard/>
              <BlogCard/>
          </div>
    </div>
  )
}

export default Home
