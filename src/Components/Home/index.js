import React, { useState } from "react";
import "../../index.css";
import "./index.css";
import logo from "../../assets/Gif/logo.gif";
import TypeAnimation from "react-type-animation";
import { Link } from "react-router-dom";
import SocialLink from "../Social-links";

function Home() {
  const [toggle, setToggle] = useState(false);

  function darkMode(bgMain, txtMain, txtSecond, bgCol, bgWhite, txtThird, bgBox) {
    setToggle(!toggle);
    if (!toggle) {
      bgMain = "#fff";
      txtMain = "#000";
      txtSecond = "#000";
      bgCol = "#fff";
      bgWhite = "#000";
      txtThird = "#000";
      bgBox = "rgba(0, 0, 0, 0.2)";
      document.documentElement.style.setProperty("--bg-lightBlue", bgMain);
      document.documentElement.style.setProperty("--text-main", txtMain);
      document.documentElement.style.setProperty("--text-second", txtSecond);
      document.documentElement.style.setProperty("--bg-color", bgCol);
      document.documentElement.style.setProperty("--bg-white", bgWhite);
      document.documentElement.style.setProperty("--text-third", txtThird);
      document.documentElement.style.setProperty("--bg-box2", bgBox);
    } else {
      document.documentElement.style.setProperty("--bg-lightBlue", "#003366");
      document.documentElement.style.setProperty("--text-main", "#fff");
      document.documentElement.style.setProperty("--text-second", "#FFFF00");
      document.documentElement.style.setProperty("--bg-color", "#111");
      document.documentElement.style.setProperty("--bg-white", "#ffffff");
      document.documentElement.style.setProperty("--text-third", "#990099");
      document.documentElement.style.setProperty(
        "--bg-box2", 'rgba(255, 255, 255, 0.2)'  
      );
    }


    /**  --bg-lightBlue:#003366;
  --text-main : #fff;
  --text-second: #FFFF00;
  --bg-color: #111;
  --bg-white:#ffffff;
  --text-third:##990099;
  --bg-box2:rgba(255, 255, 255, 0.2); */
  }
  

  return (
    <div>
     
     
      <div className="profile-container">
      <div className="dark-mode">
         <i className={!toggle? "fas fa-toggle-on":"fas fa-toggle-off"} onClick={darkMode}></i>
        </div>
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
