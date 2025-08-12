import React from 'react'

function Button({myClickFunction}) {
  return (
    <button className='text-black py-2 px-3 rounded-md bg-slate-300  cursor-pointer '
    
      onClick={myClickFunction}
    
    >Search</button>
  )
}

export default Button
