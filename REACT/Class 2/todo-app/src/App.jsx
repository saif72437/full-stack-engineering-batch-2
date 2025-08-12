import React, { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [inputValue, setInputValue] = useState("");


  let sum = useMemo(()=>{
      let count = 0
      for(let i = 0; i <= inputValue; i++){
          count = count + i
      }

      return count

  }, [inputValue]) // when inputValue changes this useMemo will re-run

 

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />

      <p>Sum is {sum}</p>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Counter {count}
      </button>
    </div>
  );
}

export default App;
