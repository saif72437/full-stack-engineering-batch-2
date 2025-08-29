import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 mt-12 bottom-0 right-0  w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="flex flex-col items-center text-center md:flex-row md:justify-around gap-8">

          <div>
            <h2 className="text-2xl font-bold text-zinc-100">Blog<span className="text-zinc-400">ify</span></h2>
            <p className="mt-2 text-sm">
              Sharing stories, tutorials, and insights. Stay inspired.
            </p>
          </div>

          <div>
            <h3 className="text-zinc-100 font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 flex gap-8">
              <li>
                <NavLink  to="/" className={({isActive}) => (isActive ? ' text-amber-200 font-semibold ' : " hover:text-amber-100")}
                >Home</NavLink>
              </li>
              <li>
                <NavLink to="/create" className={({isActive}) => (isActive ? ' text-amber-200 font-semibold ' : " hover:text-amber-100")}>Create</NavLink>
              </li>
              <li>
                <NavLink to="/profile" className={({isActive}) => (isActive ? ' text-amber-200 font-semibold ' : " hover:text-amber-100")}>Profile</NavLink>
              </li>
            </ul>
          </div>



        </div>


        <div className="border-t border-zinc-700 mt-8 pt-4 text-center text-sm text-zinc-500">
           BlogApp © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
