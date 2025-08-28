import React from 'react'

function MyButton({ onClick, text }) {
  return (
    <button 
      className="w-full py-3 px-4 rounded-xl font-semibold text-white text-lg 
      bg-gradient-to-r from-indigo-500 to-indigo-600 
      hover:from-indigo-400 hover:to-indigo-500 
      transition-all duration-200 shadow-md disabled:opacity-50"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default MyButton
