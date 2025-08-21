import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <div className='w-full h-screen p-1 bg-slate-900 text-white'>
         
          <BrowserRouter>

             <Navbar/>

              <Routes>

                    <Route path='/' element={<HomePage/>} />
                    <Route path='/about' element={<AboutPage/> } />
                    <Route path='/contact' element={<ContactPage/>} />
                    <Route path='/login' element={<LoginPage/>} />

              </Routes>

          </BrowserRouter>
    </div>
  )
}

export default App
