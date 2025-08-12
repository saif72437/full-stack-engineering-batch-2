
import Input from "./components/Input"
import Button from "./components/Button"
import Card from "./components/Card"
import { useEffect, useState } from "react"
function App() {
  

     const [inputValue, setInputValue] = useState("")


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
                console.log("hello g");
                
              }}/>

            </div>
            <div className='flex items-center justify-center mt-20'>
              <Card/>
            </div>
          </div>
        
      </div>
    </>
  )
}

export default App
