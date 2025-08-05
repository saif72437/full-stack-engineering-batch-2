import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [todos, setTodos] = useState([])
  

  console.log("re-render")
  

  return (
    <main className="h-screen w-full bg-slate-900 flex flex-col items-center gap-10 p-20">
      {/* input button container */}
      <div className="text-white flex items-center gap-10">
        <input
          id="input"
          type="text"
          placeholder="Enter something..."
          className="px-4 py-2 border-none outline-none ring-1 ring-sky-500 text-xl rounded-md"

          value={inputValue}
           
          onChange={(event)=>{
               setInputValue(event.target.value)
                
            }}  

        />
        <button className="px-4 py-2 border-none outline-none ring-1 ring-sky-500 text-xl rounded-md hover:bg-sky-500 cursor-pointer"
        
            onClick={()=>{
              
              // ...todos means that all previous todos will be added first
              
                setTodos([...todos, inputValue])

                console.log(todos);
                
              
            }}
        >
          Add
        </button>
      </div>

      {/* todo container */}

      <div className="w-[40%] min-h-screen flex flex-col items-center">
        {/* todo */}
        {
          todos.map((element, index)=> (
            <div className="bg-sky-500 text-black text-xl font-medium w-full text-center py-2 rounded-md ">
              {element}
           </div>
          ))
        }
      </div>
    </main>
  );
}

export default App;
