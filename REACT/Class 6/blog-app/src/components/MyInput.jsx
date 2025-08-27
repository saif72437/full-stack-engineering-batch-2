import React from 'react'

function MyInput({onChange, value, type, placeholder}) {
  return (
      <input type={type} className='w-2xl outline-none rounded-md border-none ring-1 ring-slate-300 text-xl py-2 px-3' placeholder={placeholder}
      
        onChange={onChange}
        value={value}

      /> 
  )
}

export default MyInput
