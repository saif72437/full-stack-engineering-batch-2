import { Link } from "react-router-dom"

function Navbar () {

        return (
            <nav className="w-4xl py-4  mx-auto flex items-center justify-between">
                <h2 className="text-4xl  font-semibold text-neutral-700">Blogify</h2>
                <ul className="flex items-center gap-10 text-lg ">
                    <Link className="hover:text-neutral-400 text-neutral-600 transition-all duration-300" to={"/"} >Home</Link>
                    <Link className="hover:text-neutral-400 text-neutral-600 transition-all duration-300" to={"/create"} >Create</Link>
                    <Link className="hover:text-neutral-400 text-neutral-600 transition-all duration-300" to={"/profile"} >Profile</Link>
                </ul>
            </nav>
        )
}

export default Navbar