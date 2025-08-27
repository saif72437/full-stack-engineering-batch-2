import { NavLink } from "react-router-dom";
import Input from "../components/Input";

function Login() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)] px-4 bg-neutral-950">
      <div className="w-full max-w-md bg-neutral-900 rounded-2xl border border-neutral-800 p-8 shadow-xl">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Welcome Back
        </h2>

        <div className="space-y-4">
          <Input label="Email" type="email" placeholder="Enter your email" />
          <Input label="Password" type="password" placeholder="••••••••" />

          <button className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 transition duration-200">
            Login
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
          Don’t have an account?{" "}
          <NavLink to="/signup" className="text-cyan-400 hover:underline">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;