import React, { useState } from 'react'
import MyInput from '../components/MyInput'
import MyButton from '../components/MyButton'
import MyHeading2 from '../components/MyHeading2'
import { toast } from 'sonner'
import { account } from '../contants'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  return (
    <div className="w-full min-h-screen bg-slate-100 flex items-center justify-center px-4">
      {/* card */}
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg flex flex-col items-center gap-5">
        <MyHeading2 text="Login" />

        <div className="w-full flex flex-col gap-4">
          <MyInput 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            type="email" 
            placeholder="John@gmail.com" 
          />
          <MyInput 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            type="password" 
            placeholder="******" 
          />
        </div>

        <MyButton 
          onClick={async () => {
            if (!email || !password) {
              toast.error("Please fill all the fields")
            } else {
              try {
                const User = await account.createEmailPasswordSession(email, password)
                if (User) {
                  toast.success("Login Successful 🎉")
                  navigate("/")
                }
              } catch (error) {
                toast.error("Invalid email or password")
              }
            }
          }} 
          text="Login" 
        />

        {/* small text link */}
        <p className="text-sm text-slate-600">
          Don’t have an account?{" "}
          <span 
            onClick={() => navigate("/signup")} 
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login
