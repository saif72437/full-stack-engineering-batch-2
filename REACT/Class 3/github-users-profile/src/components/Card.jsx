import React from 'react'

function Card() {
  return (
    <div className='w-sm bg-slate-300 p-2 flex flex-col items-center justify-center gap-2 rounded-md'>

      <img src="https://avatars.githubusercontent.com/u/143829717?v=4" alt="error" 

          className='w-20 h-20 rounded-full ring-2 ring-sky-400'
      
      />
      <h2 className='text-black  text-xl font-semibold'>Saifullah Khan</h2>
      <p className='text-gray-500 text-sm'>@saif72437</p>
      
    </div>
  )
}

export default Card
