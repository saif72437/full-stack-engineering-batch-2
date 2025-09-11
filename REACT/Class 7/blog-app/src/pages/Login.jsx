import React, { useState } from 'react'
import { toast } from 'sonner'
import { account } from '../appwrite/Services'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    async function handleLogin() {
        try {
            
            const user = await account.createEmailPasswordSession(email, password)

            if(user){
                toast.success("Loggedin Successfully")

                setTimeout(()=>{
                        navigate("/")
                }, 3000)
            }

        } catch (error) {
            toast.error("Something went wrong")
        }
    }


  return (
     <div className="flex h-[700px] w-full">
            <div className="w-full hidden md:inline-block">
                <img className="h-full" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png" alt="leftSideImage" />
            </div>
        
            <div className="w-full flex flex-col items-center justify-center">
        
                <div className="md:w-96 w-80 flex flex-col items-center justify-center">
                    <h2 className="text-4xl text-gray-900 font-medium">Sign In</h2>
                    <p className="text-sm text-gray-500/90 mt-3">Welcome Back ' Login here</p>
        
                 
        
               
        
                     <div className="mt-4 flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280"/>
                        </svg>
                        <input type="email" placeholder="Email id" className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        />                 
                    </div>
        
                    <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280"/>
                        </svg>
                        <input type="password" placeholder="Password" className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required 
                            value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        />
                    </div>
        
                  
        
                    <button className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
                    
                    onClick={handleLogin}
                    
                    >
                        Login
                    </button>
                    <p className="text-gray-500/90 text-sm mt-4">Don’t have an account? <a className="text-indigo-400 hover:underline" href="#">Sign Up</a></p>
                </div>
            </div>
        </div>
  )
}

export default Login
