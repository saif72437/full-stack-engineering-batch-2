import React, { useState } from 'react'
import MyInput from '../components/MyInput'
import MyButton from '../components/MyButton'
import MyHeading2 from '../components/MyHeading2'
import { toast } from 'sonner'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className='w-full h-screen bg-slate-400 flex items-center justify-center'>
        {/* card */}
        <div className='p-4 bg-white rounded-md flex flex-col items-center justify-center gap-3'>
           <MyHeading2 text={"Login"}/>
            <MyInput onChange={(e)=>setEmail(e.target.value)} value={email} type={"email"} placeholder={"John@gmail.com"}/>
            <MyInput onChange={(e)=>setPassword(e.target.value)} value={password} type={"password"} placeholder={"******"}/>

           <MyButton onClick={()=>{
            if(!email || !password){
              toast.error("Please fill all the fields")
              console.log(email, password);
              
            }
            
           }} text={"Login"} />
        </div>
    </div>
  )
}

export default Login
