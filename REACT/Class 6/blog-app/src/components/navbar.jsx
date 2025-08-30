import { Link } from "react-router-dom"
import { Menu, X, Home, PlusSquare, User } from "lucide-react"
import { useState } from "react"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 px-4 sm:px-6 lg:px-12 py-4 ">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600">Blogify</h2>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
          <Link className="flex items-center gap-2 hover:text-indigo-500 text-neutral-700 transition" to={"/"}>
            <Home size={20}/> Home
          </Link>
          <Link className="flex items-center gap-2 hover:text-indigo-500 text-neutral-700 transition" to={"/create"}>
            <PlusSquare size={20}/> Create
          </Link>
          <Link className="flex items-center gap-2 hover:text-indigo-500 text-neutral-700 transition" to={"/profile"}>
            <User size={20}/> Profile
          </Link>
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
          <Link className="flex items-center gap-2 hover:text-indigo-500 text-neutral-700 transition" to={"/"} onClick={()=>setOpen(false)}>
            <Home size={18}/> Home
          </Link>
          <Link className="flex items-center gap-2 hover:text-indigo-500 text-neutral-700 transition" to={"/create"} onClick={()=>setOpen(false)}>
            <PlusSquare size={18}/> Create
          </Link>
          <Link className="flex items-center gap-2 hover:text-indigo-500 text-neutral-700 transition" to={"/profile"} onClick={()=>setOpen(false)}>
            <User size={18}/> Profile
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar