
import Input from "./components/Input"
import Button from "./components/Button"
import Card from "./components/Card"
import { useEffect, useState } from "react"
function App() {
  

const [inputValue, setInputValue] = useState("")
const [userData, setUserData] = useState({})

async function apiCall(){
  let response = await fetch(`https://api.github.com/users/${inputValue}`)
  let data = await response.json()

  console.log(data);
  
  setUserData(data)
}


  return (
    <>
      <div className='w-full h-screen bg-slate-950 flex justify-center p-20'>

          <div className='w-7xl p-2 mx-auto '>

            {/* top div */}
            <div className='w-full flex items-center justify-center gap-10'>
              <Input

                  onChangeFunction={(e)=>{
                      setInputValue(e.target.value)
                    
                  }}
              
              />
              <Button myClickFunction={()=>{
                apiCall()
                
              }}/>

            </div>
            <div className='flex items-center justify-center mt-20'>
              <Card imagelink={userData.avatar_url} name={userData.name} username={userData.login}/>
            </div>
          </div>
        
      </div>
    </>
  )
}

export default App
