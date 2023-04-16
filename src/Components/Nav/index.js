import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'
export default function Nav() {

return (
    <header className='menuBar'> 
          <Link className='menuLink' to="/">
          <i className="fa fa-home"></i>
        </Link>
          <Link  className='menuLink' to="/project">
          Project
          </Link>
          <Link  className='menuLink' to="/about">
          About Me
          </Link>
          <Link  className='menuLink' to="/resume">
          Resume
          </Link>
          
  </header>
)
}

