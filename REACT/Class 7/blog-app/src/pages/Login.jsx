import React, { useState } from "react";
import Input from "../components/Input";

// Icon components
const EmailIcon = () => (
  <svg
    width="16"
    height="11"
    viewBox="0 0 16 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
      fill="#6B7280"
    />
  </svg>
);

const LockIcon = () => (
  <svg
    width="13"
    height="17"
    viewBox="0 0 13 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
      fill="#6B7280"
    />
  </svg>
);

export default function Login({ onToggle, onSuccess }) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);
    
    // Show success alert via parent
    onSuccess("Login successful! Welcome back!");
    
    // Reset form
    setFormData({
      email: "",
      password: ""
    });
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center justify-center rounded-2xl p-10 border border-gray-300/40 "
    >
          <h2 className="text-4xl text-gray-900 font-medium">Sign in</h2>
          <p className="text-sm text-gray-500/90 mt-3 text-center">
            Welcome back! Please sign in to continue
          </p>
          
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange("email")}
            icon={<EmailIcon />}
            required
            className="mt-6"
          />
          
          <Input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange("password")}
            icon={<LockIcon />}
            required
            className="mt-4"
          />
          
          <div className="w-full flex items-center justify-between mt-6 text-gray-500/80">
            <div className="flex items-center gap-2">
              <input className="h-4 w-4" type="checkbox" id="remember" />
              <label className="text-sm" htmlFor="remember">
                Remember me
              </label>
            </div>
            <a className="text-sm text-indigo-500 hover:underline" href="#">
              Forgot password?
            </a>
          </div>
          
          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Sign In
          </button>
          
          <p className="text-gray-500/90 text-sm mt-4">
            Don't have an account?{" "}
            <button 
              type="button"
              onClick={onToggle}
              className="text-indigo-500 hover:underline font-medium"
            >
              Sign up
        </button>
      </p>
    </form>
  );
}
