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
          Software Engineer with experience in full stack development, testing and
          maintenance of software system. Equipped with a diverse and promising
          skill-set. Proficient in various platform, and language. Knowledge with
          cutting-edge development tool and procedure. Able to effectively
          self-manage during independent project, as well as collaborate as part
          of a team.
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
