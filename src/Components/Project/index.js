import React from 'react'
import "./index.css"
import Nav from '../Nav'
import simple1 from "./Gif/Final-project/firstpart.gif";
import simple2 from "./Gif/Final-project/secondpart.gif"
import pegion1 from "./Gif/Pegion-blogs/pegion-blog-p1.gif"
import pegion2 from "./Gif/Pegion-blogs/pegion-blog-p2.gif"

export default function Project() {
  return (
    <div>
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
      <i className="fa">Simple App</i>
   
      </a>
      <br/>
      <a href='https://github.com/SchoolOfCode/final-project-front-end-team-26-bit-by-bit'>
      <i className="fa"> Simple Fontend Repo Github</i>
      </a>
      <br/>
      <a href='https://github.com/SchoolOfCode/final-project-repo-team-26-bit-by-bit'>
      <i className="fa">Simple Backend Repo Github</i>
      </a>
      <br/>
      </div>
      <div className='flex-box'>
      <img className='gif-final-project' src={simple1} alt="simple App"/>
   
      </div>
      <div className='flex-box'>
        <img className='gif-final-project' src={simple2} alt="simple app"/>
      </div>
      <div className='pegion-blogs'>
      <div className='links'>
      <a href='https://my-pegion-blogs.netlify.app/'>
      <i className="fa">My pegion blog APP</i>
   
      </a>
      <br/>
      <a href='https://github.com/asaad227/My-Pegion-blogs'>
      <i className="fa"> My-Pegion Repo Github</i>
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
    
      </div>
      </div>
    
  )
}
