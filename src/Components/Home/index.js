import React from "react";
import "../../index.css";
import "./index.css";
import logo from "../../assets/Gif/logo.gif";
import TypeAnimation from "react-type-animation";
import "../Nav/index.css";
import { Link } from "react-router-dom";
import SocialLink from "../Social-links";

function Home() {
  return (
    <div>

      <div className="profile-container">
        <img className="card" src={logo} alt="Ahammed Saad" loading="lazy" />

        <TypeAnimation
          className="type"
          cursor={false}
          sequence={["Hi! I'm Ahammed Saad. ", 3000]}
        />
        <TypeAnimation
          cursor={false}
          sequence={["WelCome To My Portfolio", 2000]}
        />
        <TypeAnimation
          className="type"
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
              <i className="fa"></i>Project
            </li>
          </Link>
          <Link to="/about">
            <li>
              <i className="fa"></i>About Me
            </li>
          </Link>
          <Link to="/resume">
            <li>
              <i className="fa"></i>Resume
            </li>
          </Link>
        </div>
        <SocialLink/>
      </div>
    </div>
  );
}

export default Home;
