import React, { useState } from "react";
import "../../index.css";
import "./index.css";
import logo from "../../assets/Gif/logo.gif";
import TypeAnimation from "react-type-animation";
import { Link } from "react-router-dom";
import SocialLink from "../Social-links";
import DarkMode from "../DarkMode";

function Home() {
  const [toggle, setToggle] = useState(false);


  return (
    <div>
     
     
      <div className="profile-container">
      {/* <div className="dark-mode">
         <i className={!toggle? "fas fa-toggle-on":"fas fa-toggle-off"} onClick={darkMode}></i>
        </div> */}
        {/* <div className="dark-mode">
        <DarkMode toggle={toggle} setToggle={setToggle} />
        </div> */}
        <img className="card" src={logo} alt="Ahammed Saad" loading="lazy" />

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
            <li>
              <i className="fa">Project</i>
            </li>
          </Link>
          <Link to="/about">
            <li>
              <i className="fa">About-Me</i>
            </li>
          </Link>
          <Link to="/resume">
            <li>
              <i className="fa">Resume</i>
            </li>
          </Link>
        </div>
      
        <SocialLink />
      </div>
    </div>
  );
}

export default Home;
