import React, {useState} from 'react'
import "./index.css"
import DarkMode from '../DarkMode'
import { Link } from 'react-router-dom'
export default function Nav() {
  const [toggle, setToggle] = useState(false);

 
return (
    <header className='menuBar'> 
        <div className="logo">
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
        </div>
          <div className="moodChange">
          <DarkMode toggle={toggle} setToggle={setToggle} />
          </div>
        
          
  </header>
)
}

