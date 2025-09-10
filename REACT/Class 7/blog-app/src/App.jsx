import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Create from "./pages/Create"
import Auth from "./pages/Auth"
import SingleBlog from "./pages/SingleBlog"
import Profile from "./pages/Profile"
function App(){

  return (
    <div className="w-full h-screen ">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/create" element={<Create/>} />
              <Route path="/auth" element={<Auth/>} />
              <Route path="/blog/:id" element={<SingleBlog/>} />
              <Route path="/profile" element={<Profile/>} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App