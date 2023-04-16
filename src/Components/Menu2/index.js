import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';


export default function Menu() {

    function openNav() {
        document.getElementById("mySidepanel").style.width = "200px";
        document.getElementById("mySidepanel").style.height = "700px";
    }
      function closeNav() {
        document.getElementById("mySidepanel").style.width = "0";
      }
  return (
      <div > 
    <div  className='sidepanel' id="mySidepanel">
 
<Link to='#' className='closebtn' onClick={closeNav}>
<i className="fa fa-caret">X</i></Link>
       
        <Link to="/">
            <li><i className="fa fa-home"></i></li>
            </Link>
            <Link to="/project">
            <li><i className="fa"></i>Project</li>
            </Link>
            <Link to="/about">
            <li><i className="fa"></i>About Me</li>
            </Link>
            <Link to="/resume">
            <li><i className="fa"></i>Resume</li>
            </Link>
   
    </div>
    <button className="openbtn" onClick={openNav}>
    <i className='fa'>☰</i></button>  

    </div>
  )
}
