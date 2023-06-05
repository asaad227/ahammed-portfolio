import React from "react";
import pi2 from "../../assets/Images/ahammedPic.jpeg";
import TypeAnimation from "react-type-animation";
import "./index.css";

import SocialLink from "../Social-links";
import Icons from "../Icons";
import Nav from "../Nav";

export default function About() {
  return (
    <div >
      <Nav />

      <div className="about">
        <img className="card1" src={pi2} alt="Ahammed Saad" />
        <TypeAnimation cursor={false} sequence={["Ahammed Saad", 2000]} wrapper='h3' />
        <p className="type-profile">
        As a junior developer, I have a strong foundation in programming languages such as JavaScript, Java, and Python. I am also familiar with popular frameworks and technologies like Node.js, React.js, and TypeScript. I have experience with databases such as SQL, PostgreSQL, and MongoDB. Additionally, I am proficient in using development tools and platforms like Heroku, Firebase, Express.js, and NPM.
          <br />
          <br />
          In terms of front-end development, I am skilled in creating visually appealing interfaces using CSS, HTML, and bootstrap. I have worked with design tools like wireframe.cc, Figma, and Canva to enhance the user experience of applications.
          <br />
          <br />
        
    
          In addition to my technical skills, I bring valuable experience in team building and coaching. I have a proven track record of fostering collaboration and effectively leading teams to deliver projects efficiently. My background as an accounting student has provided me with a comprehensive understanding of business and financial aspects, allowing me to approach projects with a well-rounded perspective.
          <br />
          <br />
          While I may be a junior developer, I am highly motivated and committed to continuous learning. I thrive in dynamic environments and readily adapt to new technologies and frameworks. With my enthusiasm and willingness to grow, I believe I can make valuable contributions to any development team.
          <br />
          <br />
          Thank you for considering my qualifications. I look forward to the opportunity to contribute my expertise and skills to your organization.

        </p>
        <h4>Hobbies ____________________</h4>
        <p className="type-profile">
          Travelling, exploring different cuisine and also like football and
          cricket.
        </p>

        <h4>
          Skills ____________________ </h4>
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
          wrapper="h4"
        />


        <img className="git-state"
          src="https://github-readme-stats.vercel.app/api?username=asaad227&show_icons=true&hide_border=false&title_color=ff652f&icon_color=aa6c39&bg_color=f1f1f1&text_color=#111&border_color=0c1a25"
          alt="gitHub-Stat"
          loading="lazy" />

        <div>
          <h4> Tech Stack ____________________ </h4>
          <Icons />
        </div>
      </div>
      <div className="socialLogo">
        <SocialLink />
      </div>

    </div>
  );
}
