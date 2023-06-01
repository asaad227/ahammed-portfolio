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
      <Nav />

      <div className="about">
        <img className="card" src={pic} alt="Ahammed Saad" />
        <TypeAnimation cursor={false} sequence={["Ahammed Saad", 2000]} wrapper='h2' />
        <p className="type-profile">
          I am an accomplished and versatile developer with expertise in various programming languages and technologies. My skill set includes JavaScript, Java, Python, Node.js, React.js, TypeScript, SQL, PostgreSQL, MongoDB, and a wide range of development tools. I have a strong proficiency in deploying applications using platforms such as Heroku, Firebase, Express.js, and NPM. Additionally, I am well-versed in testing frameworks like Jest, Cypress, and Enzyme.
          <br />
          <br />
          With a keen eye for design, I possess the ability to create visually appealing interfaces using CSS, HTML,bootstrap, storybook and tools like wireframe.cc, Figma and Canva. I prioritize user experience and strive to develop intuitive and engaging interfaces that enhance the overall usability of applications.
          <br />
          <br />
          In addition to my technical skills, I bring valuable experience in team building and coaching. I have a proven track record of fostering collaboration and effectively leading teams to deliver projects efficiently. My background as an accounting student has provided me with a comprehensive understanding of business and financial aspects, allowing me to approach projects with a well-rounded perspective.
          <br />
          <br />
          I am highly motivated, proactive, and committed to continuous learning. I thrive in dynamic environments and readily adapt to new technologies and frameworks. With my diverse skill set, leadership abilities, and business acumen, I am confident in my ability to make a significant impact on projects and contribute to the success of any team.

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
