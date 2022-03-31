import React from 'react';
import '../../index.css';
import './index.css';
import logo from "../../assets/Gif/logo.gif"
import TypeAnimation from 'react-type-animation';
import '../Nav/index.css';
import { Link } from 'react-router-dom';


function Home() {
  

 
 
  return (
    <div>
   <header className='project-nav'>

    
    </header>
   
    <div className='profile-container'>
    <img className='card'  src={logo} alt="Ahammed Saad"/>

      <TypeAnimation className='type' cursor={false} sequence={["Hi! I'm Ahammed Saad. ", 3000]}/>
      <TypeAnimation  cursor={false} sequence={['Well Come To My Portfolio', 2000]}/>
      <TypeAnimation className="type"
        sequence={['Software Engineer', 2000,'', 'Full Stack', 2000,'', 'FrontEnd', 2000, '', 'BackEnd', 2000, '']}
        repeat = {Infinity}
        wrapper="h4"
      />
    
    <div className='nav-home'>
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
    <div className='social-links'>
    <a href="https://www.linkedin.com/in/ahammed-saad-5341b3231/"> <i className='fa fa-linkedin'></i>-linkedin</a>
      <a href="https://github.com/asaad227"> <i className='fa fa-github'></i>-github</a>
      <a href="https://twitter.com/a_saad227"> <i className='fa fa-twitter'></i>-twitter</a>
      <a href="mailto:a.saad227@gmail.com? subject=subject text"> <i className='fa fa-google'></i>-mail</a> 
      <a href="mailto:a.saad227@yahoo.com? subject=subject text"> <i className='fa fa-yahoo'></i>-mail</a>  
      </div>
      </div>
      
      
  
   
 </div>
  
  );
}

export default Home;
