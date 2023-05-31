import React from "react";

import pic from "../../assets/Images/ahammed-fb-profile.jpeg";
import TypeAnimation from "react-type-animation";
import "./index.css";

import SocialLink from "../Social-links";
import Icons from "../Icons";
import Nav from "../Nav";

export default function About() {
  return (
    <div >
 <Nav/>

      <div className="about">
        <img className="card" src={pic} alt="Ahammed Saad" />
        <TypeAnimation cursor={false} sequence={["Ahammed Saad", 2000]} wrapper='h2' />
        <p className="type-profile">
        I am an exceptionally proactive and versatile developer with expertise in JavaScript, Java, Python, Node.js, React.js, TypeScript, SQL, PostgreSQL, MongoDB, and a range of development tools. I am well-versed in deploying applications using Heroku, Firebase, Express.js, and NPM, while also proficient in testing frameworks such as Jest, Cypress, and Enzyme. With a keen eye for design, I am adept at creating visually appealing interfaces using CSS, HTML, and tools like Figma and Canva.
<br/>
<br/> 
Beyond my technical skills, I bring valuable experience in team building and coaching, fostering collaboration, and delivering projects efficiently. Drawing on my background as an accounting student, I possess knowledge in accountancy, law, and the financial market, enabling me to approach projects with a comprehensive understanding of business and financial aspects.
<br/>
<br/>
I am highly motivated, proactive, and always eager to learn and adapt to new technologies and frameworks. With my diverse skill set, leadership abilities, and business acumen, I am well-prepared to make a significant impact on projects and contribute to the success of any team.
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
