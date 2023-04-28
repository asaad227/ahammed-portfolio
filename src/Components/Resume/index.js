/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

import "./index.css"
// import aSaadResume from "../../assets/Images/AhammedSaadCV1.png";
// import aSaadResume2 from "../../assets/Images/AhammedSaadCV2.png";
import Ahammed from "../../assets/PDF/Ahammed_saad_cv_main.pdf";
import SocialLink from '../Social-links';
import Nav from '../Nav';

function Resume() {


  return (
    <div className='top-resume'>
      <header className="project-nav">
   <Nav/>
      </header>
      <iframe src={Ahammed} className='resume-pdf'></iframe>

      {/* <img className='resume' src={aSaadResume} alt="Ahammed Saad Resume" />
      <img className='resume' src={aSaadResume2} alt="Ahammed Saad Resume" /> */}
      <SocialLink />
    </div>
  );
}
export default Resume
