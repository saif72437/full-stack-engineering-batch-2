import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard({imageLink, title, description}) {
  return (
    <Link to={"/"} className='rounded-lg p-2 bg-neutral-50 cursor-pointer hover:scale-[1.01] transition-all duration-300 ease-in-out'>
      <img src="https://images.unsplash.com/photo-1755467020939-4c3e196545bd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
        className='w-full h-50 object-cover rounded-md'
      />
      <h2 className='text-xl mt-2 font-semibold text-neutral-700'>Nature</h2>
      <p className='text-sm   text-neutral-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum qui architecto nobis nostrum voluptatem sequi!</p>
    </Link>
  )
}

export default BlogCard
