import React from "react";
import "./index.css";
import Nav from "../Nav";
import simple1 from "../../assets/Gif/Final-project/simple1.gif";
import simple2 from "../../assets/Gif/Final-project/simple3.gif";
import Pigeon1 from "../../assets/Gif/Pigeon-blogs/Pigeon-blog-p1.gif";
import Pigeon2 from "../../assets/Gif/Pigeon-blogs/Pigeon-blog-p2.gif";
import poetry from "../../assets/Gif/poetry_finder.gif";
import Bootcampers1 from "../../assets/Gif/BootcampersSocial/bootcampersSocial-1.gif";
import Bootcampers2 from "../../assets/Gif/BootcampersSocial/bootcampersSocial-2.gif";
export default function Project() {
  return (
    <div className="project">
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
          <a href="mailto:a.saad227@gmail.com? subject=subject text"> <i className='fa fa-google'></i></a> 
      <a href="mailto:a.saad227@yahoo.com? subject=subject text"> <i className='fa fa-yahoo'></i></a>  
        </div>
      </header>

      <div className="flex-container">
        <h2>
          {" "}
          Please find few of my personal and group project GIFs version below
          and if you would like to see all my project please visit my <br />
          <a href="https://github.com/asaad227">
            {" "}
            <i className="fa fa-github"></i>page
          </a>
        </h2>
        <div className="links">
          <a href="https://simple-app2.netlify.app/">
            <i className="fa"></i>Simple App
          </a>
          <br />
          <a href="https://github.com/SchoolOfCode/final-project-front-end-team-26-bit-by-bit">
            <i className="fa"> </i>Simple Fontend Github Repo
          </a>
          <br />
          <a href="https://github.com/SchoolOfCode/final-project-repo-team-26-bit-by-bit">
            <i className="fa"></i>Simple Backend Github Repo
          </a>
          <br />
        </div>
        <div className="flex-box">
          <img className="gif-final-project" src={simple1} alt="simple App" />
        </div>
        <div className="flex-box">
          <img className="gif-final-project" src={simple2} alt="simple App" />
        </div>
        <div className="Pigeon-blogs">
          <div className="links">
            <a href="https://bootcampers-social.netlify.app/">
              <i className="fa"></i> Bootcampers Social App
            </a>
            <br />
            <a href="https://github.com/SchoolOfCode/national-project-week-room-17-leanne-karen-reece-ahammed">
              <i className="fa"></i> Github Forntend repo
            </a>
            <br />

            <a href="https://github.com/SchoolOfCode/national-project-week-repo-2-room-17-leanne-karen-reece-ahammed">
              <i className="fa"></i> Github bBckend repo
            </a>
          </div>

          <div className="Pigeon-box">
            <img src={Bootcampers1} alt="Bootcampers Social App" />
          </div>
          <div className="Pigeon-box">
            <img src={Bootcampers2} alt="Bootcampers Social App" />
          </div>
        </div>

        <div className="Pigeon-blogs">
          <div className="links">
            <a href="https://my-pigeon-blogs.vercel.app/">
              <i className="fa"></i>My Pigeon blog APP
            </a>
            <br />
            <a href="https://github.com/asaad227/My-Pigeon-blogs">
              <i className="fa"> </i>My-Pigeon Github Repo
            </a>
            <br />
          </div>
          <div className="Pigeon-box">
            <img src={Pigeon1} alt="Pigeon Blogs App" />
          </div>

          <div className="Pigeon-box">
            <img src={Pigeon2} alt="Pigeon Blogs app" />
          </div>
        </div>
        <div className="Pigeon-blogs">
          <div className="links">
            <a href="https://poetry-finder.netlify.app/">
              <i className="fa"></i>Poetry Finder APP
            </a>
            <br />
            <a href="https://github.com/SchoolOfCode/hackathon-next-gatsby-ahammed-marian-jenny">
              <i className="fa"></i> My Poetry Finder Github Repo
            </a>
            <br />
          </div>
          <div className="poetry-box">
            <img src={poetry} alt="Poetry Finder" />
          </div>
        </div>
      </div>
    </div>
  );
}
