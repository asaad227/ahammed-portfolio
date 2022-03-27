import React from "react";
import Nav from "../Nav";
import "./index.css";
import Auth0 from "./Icons/auth0.png";
import Js from "./Icons/javascript-original.svg";
import npmOriginal from "./Icons/npm-original-wordmark.svg";
import nodejs from "./Icons/nodejs-original-wordmark.svg";
import postGreSql from "./Icons/postgresql-original-wordmark.svg";
import vsCode from "./Icons/vscode-original-wordmark.svg";
import html5Original from "./Icons/html5-original-wordmark.svg";
import css3Original from "./Icons/css3-original.svg";
import jestPlain from "./Icons/jest-plain.svg";
import TypeAnimation from "react-type-animation";

export default function About() {
  return (
    <div>
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
        </div>
      </header>

      <div className="profile-about">
        <div className="profile-flex">
          <h2 className="profile-para">
            <TypeAnimation
              className="type-profile"
              cursor={false}
              sequence={["Ahammed Saad", 2000]}
            />
          </h2>
        </div>
        <div className="profile-flex">
          <h4>Profile ____________________</h4>
          <p className="type-profile">
            Software Engineer with experience in full stack development, testing
            and maintenance of software system. Equipped with a diverse and
            promising skill-set. Proficient in various platform, and language.
            Knowledge with cutting-edge development tool and procedure. Able to
            effectively self-manage during independent project, as well as
            collaborate as part of a team.
          </p>
          <img src='https://github-readme-stats.vercel.app/api?username=asaad227&show_icons=true&hide_border=false&title_color=ff652f&icon_color=FFE400&bg_color=09131B&text_color=ffffff&border_color=0c1a25' alt='gitHub-Stat'/>
        </div>
        <div className="profile-flex">
          <h4>Hobbies ____________________</h4>
          <p className="type-profile">Travelling and exploring different cuisine.</p>
        </div>
        <div className="profile-flex">
          <h4>
            Skills ____________________
            <p>
              <TypeAnimation
                className="type-profile"
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
                wrapper="p"
              />
            </p>
          </h4>
        </div>
        <div className="profile-flex">
          <h4>Tech Stack ____________________ </h4>
          <img className="image-icons" src={Auth0} alt="Auth0" />
          <img className="image-icons" src={Js} alt="Js" />
          <img className="image-icons" src={nodejs} alt="nodejs" />
          <img className="image-icons" src={npmOriginal} alt="npm-original" />
          <img className="image-icons" src={postGreSql} alt="postgresSql" />
          <img className="image-icons" src={html5Original} alt="html5" />
          <img className="image-icons" src={css3Original} alt="css3" />
          <img className="image-icons" src={vsCode} alt="vscode" />
          <img className="image-icons" src={jestPlain} alt="jest" />

          {/* <img className='image-icons' src={nextOriginal} alt='next.js'/>
    <img className='image-icons' src={reactOriginal} alt='rect.js'/> */}
        </div>
      </div>
    </div>
  );
}
