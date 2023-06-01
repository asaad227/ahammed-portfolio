/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from 'react'

import "./index.css"
import pageA from "../../assets/CV/1.png"
import pageB from "../../assets/CV/2.png"
import pageC from "../../assets/CV/3.png"
import pageD from "../../assets/CV/4.png"
import Ahammed from "../../assets/PDF/Ahammed_saad_cv_main.pdf";
import SocialLink from '../Social-links';
import Nav from '../Nav';

function Resume() {
const [toggle, setToggle] = useState(false);
function screenSizes() {
  const width = window.innerWidth;
  if (width <= 600) {
    setToggle(true);
  } else {
    setToggle(false);
  }
}
useEffect(() => {
  screenSizes();
  window.addEventListener("resize", screenSizes);
  return () => {
    window.removeEventListener("resize", screenSizes);
  };
}, []);

  return (
    <div className='top-resume'>
      <header className="project-nav">
   <Nav/>
      </header>
      <div className='resume-container'>
      <div><img className={toggle?'resume':'resumeHide'} src={pageA} loading='lazy' alt="Ahammed Saad Resume" />
    <img className={toggle?'resume':'resumeHide'} src={pageB} loading='lazy' alt="Ahammed Saad Resume" />
    <img className={toggle?'resume':'resumeHide'} src={pageD} loading='lazy' alt="Ahammed Saad Resume" />
    <img className={toggle?'resume':'resumeHide'} src={pageC} loading='lazy' alt="Ahammed Saad Resume" />
    </div>
    <iframe src={Ahammed} loading='lazy' className={!toggle? 'resume-pdf':'resume-pdfHide'}></iframe>
      </div>
      <SocialLink />
    </div>
  );
}
export default Resume
