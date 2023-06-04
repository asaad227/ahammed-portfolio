import React from 'react'
import "./index.css"
import AhammedSaadResume from "../../assets/CV/Ahammed_saad_cv_main.pdf"
import { Link } from 'react-router-dom'
export default function Nav() {

 
return (
  <nav>
  <ul>
      <li><Link to="/">
      <i className="fa fa-home"></i>
      Home</Link></li>
      <li><Link to="/project">Project</Link></li>
      <li><Link to="/about">About-Me</Link></li>
      <li><Link to="/resume">Resume</Link></li>
      <li><a href={AhammedSaadResume} download={AhammedSaadResume}><i className='fa fa-download'></i>CV</a></li>
      
  </ul>
</nav>

)
}

