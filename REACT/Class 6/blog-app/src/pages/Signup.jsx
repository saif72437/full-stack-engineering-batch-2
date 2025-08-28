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
    <div className='w-full h-screen bg-slate-400 flex items-center justify-center'>
        {/* card */}
        <div className='p-4 bg-white rounded-md flex flex-col items-center justify-center gap-3'>
           <MyHeading2 text={"Sigup"}/>
           <MyInput onChange={(e)=>setName(e.target.value)} value={name} type={"text"} placeholder={"John Doe"}/>
            <MyInput onChange={(e)=>setEmail(e.target.value)} value={email} type={"email"} placeholder={"John@gmail.com"}/>
            <MyInput onChange={(e)=>setPassword(e.target.value)} value={password} type={"password"} placeholder={"******"}/>

           <MyButton onClick={async ()=>{
            if(!email || !password || !name){
              toast.error("Please fill all the fields")
            }

            else{
              try {
                let User = await  account.create(ID.unique(), email, password, name)

                if(User){
                  toast.success("User Account Created Successfully")
                  console.log(User);
                  
                  navigate("/login")
                }
                
              } catch (error) {
                
                toast.success("Something went wrong while login user")
              }
            }
            
           }} text={"Signup"} />
        </div>
    </div>
  )
}

export default Signup
