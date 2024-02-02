import React from 'react'
import './App.css'
import Navbar from './component/navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './component/home'
import Contact from './component/contact'
import About from './component/about'
import Help from './component/help'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/help" element={<Help/>} />
      </Routes>
       
    </>
  )
}

export default App
