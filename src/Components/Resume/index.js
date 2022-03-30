import React from 'react'
import Nav from '../Nav';
import "./index.css"
import aSaadResume from "../../assets/Images/aSaadResume.png";

function Resume(){
 
  
    return (
      <div className='top-resume'>
     <header className="project-nav">
        <Nav />
        <div className="social-links">
          <a href="https://www.linkedin.com/in/ahammed-saad-5341b3231/">
            {" "}
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/asaad227">
            {" "}
            <i className="fa fa-github"></i>
          </a>
          <a href="https://twitter.com/a_saad227">
            {" "}
            <i className="fa fa-twitter"></i>
          </a>
          <a href="mailto:a.saad227@gmail.com? subject=subject text"> <i className='fa fa-google'></i></a> 
      <a href="mailto:a.saad227@yahoo.com? subject=subject text"> <i className='fa fa-yahoo'></i></a>  
        </div>
      </header>
       <img className='resume' src={aSaadResume} alt="Ahammed Saad Resume"/>
      </div>
    );
}
 export default Resume
