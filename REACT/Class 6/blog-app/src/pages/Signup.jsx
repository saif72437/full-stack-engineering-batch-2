import React, { useState } from 'react'
import MyInput from '../components/MyInput'
import MyButton from '../components/MyButton'
import MyHeading2 from '../components/MyHeading2'
import { toast } from 'sonner'
import { account } from '../contants'
import { ID } from 'appwrite'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 ">
      
      {/* card */}
      <div className="w-full max-w-md p-6 sm:p-8 bg-white rounded-2xl shadow-xl border border-slate-200 flex flex-col items-center gap-6">
        
        {/* heading */}
        <MyHeading2 text={"Sign Up"} className="text-slate-800 text-2xl sm:text-3xl font-bold text-center" />

        {/* inputs */}
        <div className="flex flex-col gap-4 w-full">
          <MyInput 
            onChange={(e)=>setName(e.target.value)} 
            value={name} 
            type="text" 
            placeholder="John Doe" 
          />
          <MyInput 
            onChange={(e)=>setEmail(e.target.value)} 
            value={email} 
            type="email" 
            placeholder="john@gmail.com" 
          />
          <MyInput 
            onChange={(e)=>setPassword(e.target.value)} 
            value={password} 
            type="password" 
            placeholder="••••••••" 
          />
        </div>

        {/* button */}
        <MyButton 
          onClick={async ()=>{
            if(!email || !password || !name){
              toast.error("⚠️ Please fill all the fields")
            }
            else{
              try {
                setLoading(true)
                let User = await account.create(ID.unique(), email, password, name)

                if(User){
                  toast.success("🎉 User Account Created Successfully")
                  console.log(User);
                  navigate("/login")
                }
              } catch (error) {
                toast.error("❌ Something went wrong while creating user")
              } finally {
                setLoading(false)
              }
            }
          }} 
          text={loading ? "Creating..." : "Signup"} 
        />

        {/* footer */}
        <p className="text-sm text-slate-600 text-center">
          Already have an account?{" "}
          <span 
            onClick={() => navigate("/login")} 
            className="text-indigo-600 font-medium cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  )
}

export default Signup
