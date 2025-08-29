import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SingleBlog from "./pages/SingleBlog";
import CreateBlog from "./pages/CreateBlog";
import Navbar from "./components/navbar";
import { Toaster } from "sonner";

function App() {
  return (
    <div>
      <Toaster 
        position="top-right"
        richColors
        toastOptions={{
          style: {
            background: "white",
            color: "#1e293b", // slate-800
            borderRadius: "10px",
            padding: "12px 16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            fontSize: "15px",
            fontWeight: "500"
          },
          className: "shadow-lg border border-slate-200"
        }}
      />

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/singleblog:id" element={<SingleBlog />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
