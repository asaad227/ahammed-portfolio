import React from "react";
import "./index.css";
import Nav from "../Nav";
import simpleAll from "../../assets/Gif/Final-project/simpleAll.gif";
import Pigeon1 from "../../assets/Gif/Pigeon-blogs/Pigeon-blog-p1.gif";
import poetry from "../../assets/Gif/poetry_finder.gif";
import Bootcampers1 from "../../assets/Gif/BootcampersSocial/bootcampersSocial-1.gif";
import Bootcampers2 from "../../assets/Gif/BootcampersSocial/bootcampersSocial-2.gif";
export default function Project() {
  return (
    <div className="project">
      <header>
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
          <a href="mailto:a.saad227@gmail.com? subject=subject text">
            {" "}
            <i className="fa fa-google"></i>
          </a>
          <a href="mailto:a.saad227@yahoo.com? subject=subject text">
            {" "}
            <i className="fa fa-yahoo"></i>
          </a>
        </div>
      </header>
      <div className="flex-container">
        <div className="flex-box">
          <a href="https://simple-app2.netlify.app/">
            <i className="fa"></i>Simple App
          </a>
          <img src={simpleAll} alt="Simple App" loading="lazy" />
        </div>
        <div className="flex-box">
          <a href="https://bootcampers-social.netlify.app/">
            <i className="fa"></i> Bootcampers Social App
          </a>
          <img src={Bootcampers1} alt="Bootcampers Social App" loading="lazy" />
        </div>
        <div className="flex-box">
          <a href="https://bootcampers-social.netlify.app/">
            <i className="fa"></i> Bootcampers Social App
          </a>
          <img src={Bootcampers2} alt="Bootcampers Social App" loading="lazy" />
        </div>
        <div className="flex-box">
          <a href="https://my-pigeon-blogs.vercel.app/">
            <i className="fa"></i>My Pigeon blog APP
          </a>
          <img src={Pigeon1} alt="My Pigeon Blogs" loading="lazy" />
        </div>

        <div className="flex-box">
          <a href="https://poetry-finder.netlify.app/">
            <i className="fa"></i>Poetry Finder APP
          </a>
          <img src={poetry} alt="Poetry Finder" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
