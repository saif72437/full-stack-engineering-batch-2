import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter,  Routes, Route} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <BrowserRouter>

            <Routes>
                  <Route path="/" element={<p>Hi there</p>} />
                  <Route path="/about" element={<p>About Page</p>} />
            </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
