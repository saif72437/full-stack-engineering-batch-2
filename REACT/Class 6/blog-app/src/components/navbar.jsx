import { NavLink } from "react-router-dom"
import { Menu, X, Home, PlusSquare, User } from "lucide-react"
import { useState } from "react"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-zinc-900 text-zinc-100 shadow-md px-4 sm:px-6 lg:px-12 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        <h2 className="text-2xl font-bold text-zinc-100">Blog<span className="text-zinc-400">ify</span></h2>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-lg font-medium ">
          <li className='text-zinc-200'>
            <NavLink className={({isActive}) => (isActive ? ' text-amber-200 font-semibold flex items-center gap-2 ' : " hover:text-amber-100 transition flex items-center gap-2")} to={"/"}>
            <Home size={20}/> Home
          </NavLink>
          </li>
          
          <li className='text-zinc-200'>
            <NavLink className={({isActive}) => (isActive ? ' text-amber-200 font-semibold flex items-center gap-2 ' : " hover:text-amber-100 transition flex items-center gap-2")} to={"/create"}>
            <PlusSquare size={20}/> Create
          </NavLink>
          </li>

          <li className='text-zinc-200'>
            <NavLink className={({isActive}) => (isActive ? ' text-amber-200 font-semibold flex items-center gap-2 ' : " hover:text-amber-100 transition flex items-center gap-2")} to={"/profile"}>
            <User size={20}/> Profile
          </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-3 bg-white rounded-lg shadow-md p-4 flex flex-col gap-4 text-base">
          <NavLink className="flex items-center gap-2 hover:text-indigo-500 text-neutral-700 transition" to={"/"} onClick={()=>setOpen(false)}>
            <Home size={18}/> Home
          </NavLink>
          <NavLink className="flex items-center gap-2 hover:text-indigo-500 text-neutral-700 transition" to={"/create"} onClick={()=>setOpen(false)}>
            <PlusSquare size={18}/> Create
          </NavLink>
          <NavLink className="flex items-center gap-2 hover:text-indigo-500 text-neutral-700 transition" to={"/profile"} onClick={()=>setOpen(false)}>
            <User size={18}/> Profile
          </NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar