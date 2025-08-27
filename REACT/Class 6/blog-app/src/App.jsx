import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
// import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Navbar from './components/Navbar'
// import Profile from "./pages/Profile"
// import SingleBlog from "./pages/SingleBlog"
// import CreateBlog from "./pages/CreateBlog"

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white" >
      <BrowserRouter>

      <Navbar />
          <Routes>

              {/* <Route path="/" element={<Home/>} /> */}
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
              {/* <Route path="/profile" element={<Profile/>} /> */}
              {/* <Route path="/singleblog:id" element={<SingleBlog/>} /> */}
              {/* <Route path="/create" element={<CreateBlog/>} /> */}
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
