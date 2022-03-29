import React from "react";
import Nav from "../Nav";
import "./index.css";
import Auth0 from "../../assets/Icons/auth0.png";
import Typescript from "../../assets/Icons/Typescript_logo_2020.svg.png";
import ReactTesting from "../../assets/Icons/react testing library.png";
import Slack from "../../assets/Icons/slack-original.svg";
import Next from "../../assets/Icons/nextjs-original.svg";
import Python from "../../assets/Icons/python-original-wordmark.svg";
import Java from "../../assets/Icons/java-original-wordmark.svg";
import Cpress from "../../assets/Icons/cypress2.png";
import Postman from "../../assets/Icons/postman.png";
import Trello from "../../assets/Icons/trello-plain.svg";
import figma from "../../assets/Icons/figma-original.svg";
import Js from "../../assets/Icons/javascript-original.svg";
import item from "../../assets/Icons/react-original-wordmark.svg";
import npmOriginal from "../../assets/Icons/npm-original-wordmark.svg";
import nodejs from "../../assets/Icons/nodejs-original-wordmark.svg";
import postGreSql from "../../assets/Icons/postgresql-original-wordmark.svg";
import vsCode from "../../assets/Icons/vscode-original-wordmark.svg";
import html5Original from "../../assets/Icons/html5-original-wordmark.svg";
import css3Original from "../../assets/Icons/css3-original.svg";
import jestPlain from "../../assets/Icons/jest-plain.svg";
import Enzyme from "../../assets/Icons/enzyme.png";
import Chart from "../../assets/Icons/Chartjs.png";
import Heroku from "../../assets/Icons/heroku-original-wordmark.svg";
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
            <TypeAnimation cursor={false} sequence={["Ahammed Saad", 2000]} />
          </h2>
        </div>
        <div className="profile-flex">
          {/* <h4>Profile ____________________</h4> */}
          <p className="type-profile">
            Software Engineer with experience in full stack development, testing
            and maintenance of software system. Equipped with a diverse and
            promising skill-set. Proficient in various platform, and language.
            Knowledge with cutting-edge development tool and procedure. Able to
            effectively self-manage during independent project, as well as
            collaborate as part of a team.
          </p>
        </div>
        <div className="profile-flex">
          <h4>Hobbies ____________________</h4>
          <p className="type-profile">
            Travelling and exploring different cuisine.
          </p>
        </div>
        <div className="profile-flex">
          <h4>
            Skills ____________________
            <p>
              <TypeAnimation
                className="type-profile"
                sequence={[
                  "Frontend Development",
                  2000,
                  "",
                  "Database",
                  2000,
                  "",
                  "Programming",
                  2000,
                  "",
                  "UI/UX Design",
                  2000,
                  "",
                  "Agile Methodology",
                  2000,
                  "",
                  "Adaptability",
                  2000,
                  "",

                  "Dedicated Team Player",
                  2000,
                  "",
                ]}
                repeat={Infinity}
                wrapper="p"
              />
            </p>
          </h4>
          <img
            src="https://github-readme-stats.vercel.app/api?username=asaad227&show_icons=true&hide_border=false&title_color=ff652f&icon_color=FFE400&bg_color=09131B&text_color=ffffff&border_color=0c1a25"
            alt="gitHub-Stat"
          />
        </div>
        <div className="profile-flex">
          <h4>Tech Stack ____________________ </h4>

          <img className="image-icons" src={Js} alt="Js" />
          <img className="image-icons" src={item} alt="React" />
          <img className="image-icons" src={Typescript} alt="Typescript" />
          <img
            className="image-icons"
            style={{ background: "white" }}
            src={Next}
            alt="Next"
          />

          <img className="image-icons" src={Java} alt="Java" />
          <img className="image-icons" src={Python} alt="Python" />
          <img className="image-icons" src={nodejs} alt="nodejs" />
          <img className="image-icons" src={npmOriginal} alt="npm-original" />
          <img className="image-icons" src={html5Original} alt="html5" />
          <img className="image-icons" src={css3Original} alt="css3" />
          <img className="image-icons" src={figma} alt="Figma" />
          <img className="image-icons" src={Chart} alt="Chart.js" />
          <img className="image-icons" src={Heroku} alt="Heroku" />
          <img className="image-icons" src={postGreSql} alt="postgresSql" />
          <img className="image-icons" src={Postman} alt="Postman" />
          <img className="image-icons" src={Auth0} alt="Auth0" />
          <img className="image-icons" src={Enzyme} alt="Enzyme" />
          <img className="image-icons" src={jestPlain} alt="jest" />
          <img className="image-icons" src={ReactTesting} alt="jest" />
          <img className="image-icons" src={Cpress} alt="Cypress" />
          <img className="image-icons" src={Trello} alt="Trello" />
          <img className="image-icons" src={Slack} alt="Slack" />
          <img className="image-icons" src={vsCode} alt="vscode" />
        </div>
      </div>
    </div>
  );
}
