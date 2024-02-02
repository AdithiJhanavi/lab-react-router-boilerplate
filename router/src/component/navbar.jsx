import React from 'react';
import {Link} from "react-router-dom"
import '../App.css'
export default function Navbar() {
  return (
    <div className='container'>
        <div className='name'><Link to="/">Kalvium</Link></div>
        <div className='two'>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/help">Help</Link>
    </div>
    </div>
  )
}
