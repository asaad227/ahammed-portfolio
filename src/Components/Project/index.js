import React from "react";
import "./index.css";
import Nav from "../Nav";
import simpleAll from "../../assets/Gif/Final-project/simpleAll.gif";
import Pigeon1 from "../../assets/Gif/Pigeon-blogs/Pigeon-blog-p1.gif";
import poetry from "../../assets/Gif/poetry_finder.gif";
import Bootcampers1 from "../../assets/Gif/BootcampersSocial/bootcampersSocial-1.gif";
import Bootcampers2 from "../../assets/Gif/BootcampersSocial/bootcampersSocial-2.gif";
import PokemonQ from '../../assets/Gif/Pokemon-q.gif'
import AsianRecipe from '../../assets/Gif/Asian-recipe/Asian-recipe-app.gif';
import AsianRecipeResponsive from '../../assets/Gif/Asian-recipe/Asian Recipe.gif';
import ECommerce from '../../assets/Gif/E-commerce-site/E-commerce.gif';
import EcommerceResponsive from '../../assets/Gif/E-commerce-site/E-commerce-site.gif';
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
          <p>Full stack react app with CRUD functionality. 
          Frontend react.js and backend using PostgreSQL. 
          Features such as darkmode, i18n translator, hide & show component, progressive graph </p>
          <img src={simpleAll} alt="Simple App" loading="lazy" />
        </div>
        <div className="flex-box">
          <a href="https://pokemon-q.vercel.app/">
            <i className="fa"></i>Pokemon-Q
          </a>
          <p>Fetch Api and JavaScript DOM manipulation to dynamically 
          access and update the content, structure and style of the document.</p>
          <img src={PokemonQ} alt="Pokemon-Q" loading="lazy" />
        </div>
        <div className="flex-box">
          <a href="https://e-commerce-site-delta.vercel.app/">
            <i className="fa"></i>E-commerce-site
          </a>
          <p>E-commerce recat app with localstorage for persistent data</p>
          <img src={ECommerce} alt="E-commerce" loading="lazy" />
        </div>
        <div className="flex-box">
          <a href="https://e-commerce-site-delta.vercel.app/">
            <i className="fa"></i>E-commerce-responsive
          </a>
          <p>Responsive react e-commerce site with localstorage for persistent data</p>
          <img src={EcommerceResponsive} alt="E-commerce-responsive" loading="lazy" />
        </div>
        <div className="flex-box">
          <a href="https://asian-recipe.vercel.app/">
            <i className="fa"></i>Asian-recipe
          </a>
          <p>Asian recipe App using react app</p>
          <img src={AsianRecipe} alt="Asian-recipe" loading="lazy" />
        </div>
        <div className="flex-box">
          <a href="https://asian-recipe.vercel.app/">
            <i className="fa"></i>Asian-recipe-responsive
          </a>
          <p>Asian recipe App using react app</p>
          <img src={AsianRecipeResponsive} alt="Asian-recipe-responsive" loading="lazy" />
        </div>
       
        <div className="flex-box">
          <a href="https://bootcampers-social.netlify.app/">
            <i className="fa"></i> Bootcampers Social App
          </a>
          <p>Full Stack React App with CRUD functionality.</p>
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
          <p>Simple Next.js app using dummy data to making blog post.</p>
          <img src={Pigeon1} alt="My Pigeon Blogs" loading="lazy" />
        </div>
       

        <div className="flex-box">
          <a href="https://poetry-finder.netlify.app/">
            <i className="fa"></i>Poetry Finder APP
          </a>
          <p>Using Next.js to fetch data and design with css.module.</p>
          <img src={poetry} alt="Poetry Finder" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
