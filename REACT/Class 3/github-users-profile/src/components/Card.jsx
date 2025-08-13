import React from 'react'

function Card({imagelink, name, username}) {
  return (
    <div className='w-sm bg-slate-300 p-2 flex flex-col items-center justify-center gap-2'>

      <img src={imagelink} alt="error" 

          className='w-20 h-20 rounded-full ring-2 ring-sky-400'
      
      />
      <h2 className='text-black  text-xl font-semibold'>{name}</h2>
      <p >@{username}</p>
      
    </div>
  )
}

export default Card
