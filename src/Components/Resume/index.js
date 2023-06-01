/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

import "./index.css"
import pageA from "../../assets/CV/1.png"
import pageB from "../../assets/CV/2.png"
import pageC from "../../assets/CV/3.png"
import pageD from "../../assets/CV/4.png"
import Ahammed from "../../assets/PDF/Ahammed_saad_cv_main.pdf";
import SocialLink from '../Social-links';
import Nav from '../Nav';

function Resume() {
function screenSizes() {
  const width = window.innerWidth;
  if (width <= 600) {
    return (<div><img className='resume' src={pageA} loading='lazy' alt="Ahammed Saad Resume" />
    <img className='resume' src={pageB} loading='lazy' alt="Ahammed Saad Resume" />
    <img className='resume' src={pageC} loading='lazy' alt="Ahammed Saad Resume" />
    <img className='resume' src={pageD} loading='lazy' alt="Ahammed Saad Resume" />
    </div> )
  }else{
    return <iframe src={Ahammed} loading='lazy' className='resume-pdf'></iframe>

  }
 
}


  return (
    <div className='top-resume'>
      <header className="project-nav">
   <Nav/>
      </header>
      <div className='resume-container'>
      {screenSizes()}
      </div>
      <SocialLink />
    </div>
  );
}
export default Resume
