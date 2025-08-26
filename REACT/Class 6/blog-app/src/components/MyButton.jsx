import React from 'react'

function MyButton({onClick, text}) {
  return (
     <button className='w-2xl outline-none border-none bg-slate-400 font-semibold rounded-md cursor-pointer hover:bg-slate-500 hover:text-white transition-all text-xl py-2 px-3'
        onClick={onClick}
     >{text}</button>
  )
}

export default MyButton
