import React from 'react'

function Input({onChangeFunction}) {
  return (
    
      <input type="text" placeholder='Enter your username'

        onChange={onChangeFunction}

        className='px-3 rounded-md w-xs py-2 bg-slate-300 border-none outline-none ring-sky-400 ring-2'

      />
    
  )
}

export default Input
