import React from 'react'
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

export default function Icons() {
  return (
    <div>
 <img className="image-icons" src={Js} alt="Js" loading='lazy' />
      <img className="image-icons" src={item} alt="React" loading='lazy' />
      <img className="image-icons" src={Typescript} alt="Typescript" loading='lazy'/>
      <img
        className="image-icons"
        style={{ background: "white" }}
        src={Next}
        alt="Next"
      loading='lazy'/>

      <img className="image-icons" src={Java} alt="Java" loading="lazy" />
      <img className="image-icons" src={Python} alt="Python" loading="lazy"/>
      <img className="image-icons" src={nodejs} alt="nodejs" loading="lazy" />
      <img className="image-icons" src={npmOriginal} alt="npm-original" loading="lazy" />
      <img className="image-icons" src={html5Original} alt="html5" loading="lazy"/>
      <img className="image-icons" src={css3Original} alt="css3" loading="lazy"/>
      <img className="image-icons" src={figma} alt="Figma" loading="lazy"/>
      <img className="image-icons" src={Chart} alt="Chart.js" loading="lazy"/>
      <img className="image-icons" src={Heroku} alt="Heroku" loading="lazy"/>
      <img className="image-icons" src={postGreSql} alt="postgresSql" loading="lazy"/>
      <img className="image-icons" src={Postman} alt="Postman" loading="lazy"/>
      <img className="image-icons" src={Auth0} alt="Auth0" loading="lazy"/>
      <img className="image-icons" src={Enzyme} alt="Enzyme" loading="lazy"/>
      <img className="image-icons" src={jestPlain} alt="jest" loading="lazy"/>
      <img className="image-icons" src={ReactTesting} alt="jest" loading="lazy"/>
      <img className="image-icons" src={Cpress} alt="Cypress" loading="lazy"/>
      <img className="image-icons" src={Trello} alt="Trello" loading="lazy"/>
      <img className="image-icons" src={Slack} alt="Slack" loading="lazy"/>
      <img className="image-icons" src={vsCode} alt="vscode" loading="lazy"/>
    </div>
  )
}
