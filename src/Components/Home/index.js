import React from 'react';
import '../../index.css';
import './index.css';
import pic from "./ahammedSaad (3).png"
import TypeAnimation from 'react-type-animation';
import '../Nav/index.css';
import { Link } from 'react-router-dom';


function Home() {
  

 
 
  return (
    <div>
   <header className='project-nav'>
    {/* <Nav/> */}
    
    </header>
   
    <div className='profile-container'>
    
      <img className='card' src={pic} alt="Ahammed Saad"/>
      <TypeAnimation className='type' cursor={false} sequence={['Ahammed SAAD', 3000]}/>
      <TypeAnimation  cursor={false} sequence={['Well Come To My Portfolio', 2000]}/>
      <TypeAnimation className="type"
        sequence={['Software Engineer', 2000,'', 'Full Stack', 2000,'', 'FrontEnd', 2000, '', 'BackEnd', 2000, '']}
        repeat = {Infinity}
        wrapper="h4"
      />
    
    <div className='nav-home'>
    <Link to="/project">
            <li><i className="fa">Project</i></li>
            </Link>
            <Link to="/about">
            <li><i className="fa">About Me</i></li>
            </Link>
            </div>
    <div className='social-links'>
    <a href="https://www.linkedin.com/in/ahammed-saad-5341b3231/"> <i className='fa fa-linkedin'></i></a>
      <a href="https://github.com/asaad227"> <i className='fa fa-github'></i></a>
      <a href="https://twitter.com/a_saad227"> <i className='fa fa-twitter'></i></a>
           
      </div>
      </div>
      
      
  
   
 </div>
  
  );
}

export default Home;
