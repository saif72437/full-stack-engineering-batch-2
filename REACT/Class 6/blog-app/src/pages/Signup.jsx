import React, { useState } from 'react'
import MyInput from '../components/MyInput'
import MyButton from '../components/MyButton'
import MyHeading2 from '../components/MyHeading2'
import { toast } from 'sonner'

function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  return (
    <div className='w-full h-screen bg-slate-400 flex items-center justify-center'>
        {/* card */}
        <div className='p-4 bg-white rounded-md flex flex-col items-center justify-center gap-3'>
           <MyHeading2 text={"Sigup"}/>
           <MyInput onChange={(e)=>setName(e.target.value)} value={name} type={"text"} placeholder={"John Doe"}/>
            <MyInput onChange={(e)=>setEmail(e.target.value)} value={email} type={"email"} placeholder={"John@gmail.com"}/>
            <MyInput onChange={(e)=>setPassword(e.target.value)} value={password} type={"password"} placeholder={"******"}/>

           <MyButton onClick={()=>{
            if(!email || !password || !name){
              toast.error("Please fill all the fields")
            }
            
           }} text={"Signup"} />
        </div>
    </div>
  )
}

export default Signup
