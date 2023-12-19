import React from "react";
import "./index.css";

import logo from "../Home/ahammed-logo-main.png";
import TypeAnimation from "react-type-animation";
import { Link } from "react-router-dom";
import SocialLink from "../Social-links";


function Home() {



  return (
    <div>
     
     
      <div className="profile-container">
      {/* <div className="dark-mode">
         <i className={!toggle? "fas fa-toggle-on":"fas fa-toggle-off"} onClick={darkMode}></i>
        </div> */}
        {/* <div className="dark-mode">
        <DarkMode toggle={toggle} setToggle={setToggle} />
        </div> */}
        <img className="card" style={{width:300}} src={logo} alt="Ahammed Saad" loading="lazy" />

        {/* <TypeAnimation
          className="opening-txt"
          cursor={false}
          sequence={["Hi!!! ", 3000]}
        /> */}
        <TypeAnimation
        className="headerTxt"
          cursor={false}
          sequence={["Welcome To My Portfolio", 2000]}
        />
        <TypeAnimation
          className="headerTxt"
          sequence={[
            "Software Engineer",
            2000,
            "",
            "Full Stack",
            2000,
            "",
            "FrontEnd",
            2000,
            "",
            "BackEnd",
            2000,
            "",
          ]}
          repeat={Infinity}
          wrapper="h4"
        />

        <div className="nav-home">
          <Link to="/project">
          
            Project
           
          </Link>
          <Link to="/about">
           
             About-Me
           
          </Link>
          <Link to="/resume">
           
             Resume
           
          </Link>
        </div>
      
       
      </div>
      <SocialLink />
    </div>
  );
}

export default Home;
