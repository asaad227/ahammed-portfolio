import React from 'react'
import "./index.css"
import Nav from '../Nav'
import simple1 from "./Gif/Final-project/simple1.gif";
import simple2 from "./Gif/Final-project/simple3.gif"
import pegion1 from "./Gif/Pegion-blogs/pegion-blog-p1.gif"
import pegion2 from "./Gif/Pegion-blogs/pegion-blog-p2.gif";
import poetry from "./Gif/poetry_finder.gif";

export default function Project() {
  return (
    <div className='project'>
    <header className='project-nav'>
    <Nav/>
    <div className='social-links'>
    <a href="https://www.linkedin.com/in/ahammed-saad-5341b3231/"> <i className='fa fa-linkedin'></i></a>
      <a href="https://github.com/asaad227"> <i className='fa fa-github'></i></a>
      <a href="https://twitter.com/a_saad227"> <i className='fa fa-twitter'></i></a>
      </div>
    </header>
  
    <div className='flex-container'>
    <div className='links'>
      <a href='https://simple-app2.netlify.app/'>
      <i className="fa"></i>Simple App
   
      </a>
      <br/>
      <a href='https://github.com/SchoolOfCode/final-project-front-end-team-26-bit-by-bit'>
      <i className="fa"> </i>Simple Fontend Github Repo
      </a>
      <br/>
      <a href='https://github.com/SchoolOfCode/final-project-repo-team-26-bit-by-bit'>
      <i className="fa"></i>Simple Backend Github Repo
      </a>
      <br/>
      </div>
      <div className='flex-box'>
      <img className='gif-final-project' src={simple1} alt="simple App"/>
   
      </div>
      <div className='flex-box'>
      <img className='gif-final-project' src={simple2} alt="simple App"/>
   
      </div>
    
      <div className='pegion-blogs'>
      <div className='links'>
      <a href='https://my-pegion-blogs.netlify.app/'>
      <i className="fa"></i>My pegion blog APP
   
      </a>
      <br/>
      <a href='https://github.com/asaad227/My-Pegion-blogs'>
      <i className="fa"> </i>My-Pegion Github Repo
      </a>
      <br/>
     
      </div>
      <div className='pegion-box'>
      <img  src={pegion1} alt="Pegion Blogs App"/>
   
      </div>
     
      <div className='pegion-box'>
        <img src={pegion2} alt="Pegion Blogs app"/>
      </div>


      </div>
      <div className='pegion-blogs'>
      <div className='links'>
      <a href='https://poetry-finder.netlify.app/'>
      <i className="fa"></i>Poetry Finder APP
   
      </a>
      <br/>
      <a href='https://github.com/SchoolOfCode/hackathon-next-gatsby-ahammed-marian-jenny'>
      <i className="fa"></i> My Poetry Finder Github Repo
      </a>
      <br/>
     
      </div>
      <div className='poetry-box'>
      <img  src={poetry} alt="Poetry Finder"/>
   
      </div>
     
     

      
      </div>
    
      </div>
      </div>
    
  )
}
