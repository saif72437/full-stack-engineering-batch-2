import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AboutPage() {

        const navigate = useNavigate()

  return (
    <div className='h-full w-full flex-col gap-10 flex items-center justify-center'>
        This is my About Page

        <button className='bg-slate-700/40 ring-sky-300 ring-1 rounded-md text-xl cursor-pointer py-2 px-3 round-md'
            onClick={()=>{
                navigate("/login")
            }}
        >
            Login
        </button>
    </div>
  )
}

export default AboutPage
