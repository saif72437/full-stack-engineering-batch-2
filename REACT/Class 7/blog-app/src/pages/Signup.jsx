import React, { useState } from "react";
import Input from "../components/Input";

// Icon components
const UserIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
      fill="#6B7280"
    />
    <path
      d="M8 10C3.58172 10 0 13.5817 0 18H16C16 13.5817 12.4183 10 8 10Z"
      fill="#6B7280"
    />
  </svg>
);

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

export default function Signup({ onToggle, onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup form submitted:", formData);
    
    // Show success alert via parent
    onSuccess("Account created successfully!");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center justify-center rounded-2xl p-10 border border-gray-300/40 "
    >
        <h2 className="text-4xl text-gray-900 font-medium">Sign up</h2>
        <p className="text-sm text-gray-500/90 mt-3 text-center">
          Create your account to get started
        </p>

        <Input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleInputChange("name")}
          icon={<UserIcon />}
          required
          className="mt-6"
        />

        <Input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange("email")}
          icon={<EmailIcon />}
          required
          className="mt-4"
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

        <Input
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange("confirmPassword")}
          icon={<LockIcon />}
          required
          className="mt-4"
        />

        <div className="w-full flex items-center mt-6 text-gray-500/80">
          <div className="flex items-center gap-2">
            <input className="h-4 w-4" type="checkbox" id="terms" />
            <label className="text-sm" htmlFor="terms">
              I agree to the{" "}
              <a className="text-indigo-500 hover:underline" href="#">
                Terms & Conditions
              </a>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 w-full h-11 rounded-full text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Create Account
        </button>

        <p className="text-gray-500/90 text-sm mt-4">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onToggle}
            className="text-indigo-500 hover:underline font-medium"
          >
            Sign in
        </button>
      </p>
    </form>
  );
}
