import React from 'react'

function MyInput({ onChange, value, type, placeholder }) {
  return (
    <input 
      type={type} 
      className="w-full rounded-xl border border-slate-300 focus:ring-2 
focus:ring-indigo-500 focus:border-indigo-500 
text-base sm:text-lg py-3 px-4 outline-none transition-all"

      placeholder={placeholder}
      onChange={onChange}
      value={value}
    /> 
  )
}

export default MyInput
