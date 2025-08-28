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
    <div className='w-full h-screen bg-slate-400 flex items-center justify-center'>
        {/* card */}
        <div className='p-4 bg-white rounded-md flex flex-col items-center justify-center gap-3'>
           <MyHeading2 text={"Login"}/>
            <MyInput onChange={(e)=>setEmail(e.target.value)} value={email} type={"email"} placeholder={"John@gmail.com"}/>
            <MyInput onChange={(e)=>setPassword(e.target.value)} value={password} type={"password"} placeholder={"******"}/>

           <MyButton onClick={ async ()=>{
            if(!email || !password){
              toast.error("Please fill all the fields")
              console.log(email, password);
              
            }

            else{
            try {
                const User = await account.createEmailPasswordSession(email, password)
                if(User){
                  navigate("/")
                }
                
            } catch (error) {
              toast.error("Something went wrong")
            }
            }
            
           }} text={"Login"} />
        </div>
    </div>
  )
}

export default Login
