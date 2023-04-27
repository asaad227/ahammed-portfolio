import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'
export default function Nav() {

return (
    <header className='menuBar'> 
          <Link className='menuLink' to="/">
          <i className="fa fa-home"></i>
          {/* Home */}
        </Link>
          <Link  className='menuLink' to="/project">
          {/* <i className="fas fa-project-diagram"></i> */}
          Project
          </Link>
          <Link  className='menuLink' to="/about">
          {/* <i className="fa fa-user"></i> */}
          About Me
          </Link>
          <Link  className='menuLink' to="/resume">
          {/* <i className="fa fa-file"></i> */}
          Resume
          </Link>
          
  </header>
)
}

