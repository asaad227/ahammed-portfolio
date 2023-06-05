import React from 'react';
import "./index.css";

export default function DarkMode({ toggle, setToggle }) {


    function darkMode(txtMain, txtSecond, bgCol, bgBlack, txtThird, bgBox,bgPic) {
        setToggle(!toggle);
        if (!toggle) {
            // bgMain ="#003366";
            txtMain =  "#fff";
            txtSecond ="#FFFF00" ;
            bgCol = "#fff";
            bgBlack = "#111";
            txtThird =  "#990099";
            bgBox = 'rgba(255, 255, 255, 0.2)';
            bgPic = 'https://github.com/asaad227/ahammed-portfolio/blob/main/src/assets/Images/NightblueSkyBg.png?raw=true';

            // document.documentElement.style.setProperty("--bg-main", bgMain);
            document.documentElement.style.setProperty("--text-main", txtMain);
            document.documentElement.style.setProperty("--text-second", txtSecond);
            document.documentElement.style.setProperty("--bg-color", bgCol);
            document.documentElement.style.setProperty("--bg-black", bgBlack);
            document.documentElement.style.setProperty("--text-third", txtThird);
            document.documentElement.style.setProperty("--bg-box2", bgBox);
            document.documentElement.style.setProperty("--bg-image-main", `url(${bgPic})`);
        } else {
            const bgday = "https://github.com/asaad227/ahammed-portfolio/blob/main/src/assets/Images/BlueFadeWater.png?raw=true";
            // document.documentElement.style.setProperty("--bg-main", "#ffffff");
            document.documentElement.style.setProperty("--text-main","#000");
            document.documentElement.style.setProperty("--text-second","#990099" );
            document.documentElement.style.setProperty("--bg-color","#ffffff" );
            document.documentElement.style.setProperty("--bg-black",'#000' );
            document.documentElement.style.setProperty("--text-third",'#FFFF00' );
            document.documentElement.style.setProperty(
                "--bg-box2",'rgba(0, 0, 0, 0.2)' 
            )
            document.documentElement.style.setProperty("--bg-image-main", `url(${bgday})`);
        }


        /**  --bg-main:#ffffff;
  --text-main : #000;
  --text-second: #990099;
  --bg-color:#ffffff;
  --bg-black:#000;
  --text-third:#FFFF00;
  --bg-box2:rgba(0, 0, 0, 0.2); */
    }

    return (
        <div className='darkmood'>
            <i className={!toggle ? "fas fa-toggle-on" : "fas fa-toggle-off"} onClick={darkMode}></i>
        </div>
    )
}
