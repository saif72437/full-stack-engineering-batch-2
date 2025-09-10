import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Create from "./pages/Create"
import Signup from "./pages/Signup"
import SingleBlog from "./pages/SingleBlog"
import Navbar from "./components/Navbar"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
function App(){

  return (
    <div className="w-full h-screen ">
      <BrowserRouter>
        <Navbar/>
  
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/create" element={<Create/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/blog/:id" element={<SingleBlog/>} />
              <Route path="/profile" element={<Profile/>} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App