import { NavLink } from "react-router-dom";
import { Home, PlusSquare, LogIn, UserPlus } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: <Home size={18} /> },
    { path: "/create", label: "Create", icon: <PlusSquare size={18} /> },
    { path: "/login", label: "Login", icon: <LogIn size={18} /> },
    { path: "/signup", label: "Signup", icon: <UserPlus size={18} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-900/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wide"
        >
          Dark<span className="text-white">Blog</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 transition ${
                  isActive
                    ? "text-cyan-400 font-semibold"
                    : "text-neutral-300 hover:text-cyan-300"
                }`
              }
            >
              {item.icon} {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-neutral-300"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-neutral-900 border-t border-neutral-800">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 ${
                  isActive
                    ? "text-cyan-400 font-semibold"
                    : "text-neutral-300 hover:text-cyan-300"
                }`
              }
            >
              {item.icon} {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;