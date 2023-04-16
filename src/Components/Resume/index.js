import React from 'react'
import Nav from '../Nav';
import "./index.css"
import aSaadResume from "../../assets/Images/AhammedSaadCV1.png";
import aSaadResume2 from "../../assets/Images/AhammedSaadCV2.png";
import SocialLink from '../Social-links';

function Resume(){
 
  
    return (
      <div className='top-resume'>
     <header className="project-nav">
        <Nav />
      </header>
       <img className='resume' src={aSaadResume} alt="Ahammed Saad Resume"/>
       <img className='resume' src={aSaadResume2} alt="Ahammed Saad Resume"/>
      <SocialLink/>
      </div>
    );
}
 export default Resume
