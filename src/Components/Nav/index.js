import React, {useState} from 'react'
import "./index.css"
import { Link } from 'react-router-dom'
export default function Nav() {
  const [toggle, setToggle] = useState(false);

  function darkMode(bgMain, txtMain, txtSecond, bgCol, bgWhite, txtThird, bgBox) {
    setToggle(!toggle);
    if (!toggle) {
      bgMain = "#fff";
      txtMain = "#000";
      txtSecond = "#000";
      bgCol = "#fff";
      bgWhite = "#000";
      txtThird = "#000";
      bgBox = "rgba(0, 0, 0, 0.2)";
      document.documentElement.style.setProperty("--bg-lightBlue", bgMain);
      document.documentElement.style.setProperty("--text-main", txtMain);
      document.documentElement.style.setProperty("--text-second", txtSecond);
      document.documentElement.style.setProperty("--bg-color", bgCol);
      document.documentElement.style.setProperty("--bg-white", bgWhite);
      document.documentElement.style.setProperty("--text-third", txtThird);
      document.documentElement.style.setProperty("--bg-box2", bgBox);
    } else {
      document.documentElement.style.setProperty("--bg-lightBlue", "#003366");
      document.documentElement.style.setProperty("--text-main", "#fff");
      document.documentElement.style.setProperty("--text-second", "#FFFF00");
      document.documentElement.style.setProperty("--bg-color", "#111");
      document.documentElement.style.setProperty("--bg-white", "#ffffff");
      document.documentElement.style.setProperty("--text-third", "#990099");
      document.documentElement.style.setProperty(
        "--bg-box2", 'rgba(255, 255, 255, 0.2)'  
      );
    }


    /**  --bg-lightBlue:#003366;
  --text-main : #fff;
  --text-second: #FFFF00;
  --bg-color: #111;
  --bg-white:#ffffff;
  --text-third:##990099;
  --bg-box2:rgba(255, 255, 255, 0.2); */
  }
   
return (
    <header className='menuBar'> 
        <div className="logo">
          <Link className='menuLink' to="/">
          <i className="fa fa-home"></i>
          {/* Home */}
        </Link>
          <Link  className='menuLink' to="/project">
          {/* <i className="fas fa-project-diagram"></i> */}
          Project
          </Link>
          <Link  className='menuLink' to="/about">
          {/* <i className="fa fa-user"></i> */}
          About Me
          </Link>
          <Link  className='menuLink' to="/resume">
          {/* <i className="fa fa-file"></i> */}
          Resume
          </Link>
        </div>
          <div className="moodChange">
          <i className={!toggle? "fas fa-toggle-on":"fas fa-toggle-off"} onClick={darkMode}></i>
          </div>
        
          
  </header>
)
}

