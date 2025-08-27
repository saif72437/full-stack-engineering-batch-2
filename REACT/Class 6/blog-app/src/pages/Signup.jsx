import { NavLink } from "react-router-dom";
import Input from "../components/Input";

function Signup() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)] px-4 bg-neutral-950">
      <div className="w-full max-w-md bg-neutral-900 rounded-2xl border border-neutral-800 p-8 shadow-xl">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Create an Account
        </h2>

        <div className="w-full space-y-4">
          {/* Inputs */}
          <Input label="Name" placeholder="Your name" />
          <Input label="Email" type="email" placeholder="Enter your email" />
          <Input label="Password" type="password" placeholder="••••••••" />

          {/* Button */}
          <button className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 transition duration-200">
            Sign Up
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <div className="flex-1 h-px bg-neutral-700" />
          <span className="text-neutral-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-neutral-700" />
        </div>

        {/* Footer */}
        <p className="text-sm text-center text-neutral-400 mt-6">
          Already have an account?{" "}
          <NavLink
           to="/login" className="text-cyan-400 hover:underline">
            Log In
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Signup;