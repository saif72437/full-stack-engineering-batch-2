import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-4xl py-2 px-2 bg-white text-2xl rounded-full mx-auto mt-10 text-black flex items-center justify-center gap-10'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Navbar
