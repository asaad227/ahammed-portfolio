import React from 'react'

export default function DarkMode({ toggle, setToggle }) {


    function darkMode(bgMain, txtMain, txtSecond, bgCol, bgWhite, txtThird, bgBox) {
        setToggle(!toggle);
        if (!toggle) {
            bgMain = "#fff";
            txtMain = "#000";
            txtSecond = "#990099";
            bgCol = "#fff";
            bgWhite = "#000";
            txtThird = "#000";
            bgBox = "rgba(0, 0, 0, 0.2)";
            document.documentElement.style.setProperty("--bg-main", bgMain);
            document.documentElement.style.setProperty("--text-main", txtMain);
            document.documentElement.style.setProperty("--text-second", txtSecond);
            document.documentElement.style.setProperty("--bg-color", bgCol);
            document.documentElement.style.setProperty("--bg-white", bgWhite);
            document.documentElement.style.setProperty("--text-third", txtThird);
            document.documentElement.style.setProperty("--bg-box2", bgBox);
        } else {
            document.documentElement.style.setProperty("--bg-main", "#003366");
            document.documentElement.style.setProperty("--text-main", "#fff");
            document.documentElement.style.setProperty("--text-second", "#FFFF00");
            document.documentElement.style.setProperty("--bg-color", "#111");
            document.documentElement.style.setProperty("--bg-white", "#ffffff");
            document.documentElement.style.setProperty("--text-third", "#990099");
            document.documentElement.style.setProperty(
                "--bg-box2", 'rgba(255, 255, 255, 0.2)'
            );
        }


        /**  --bg-main:#003366;
      --text-main : #fff;
      --text-second: #FFFF00;
      --bg-color: #111;
      --bg-white:#ffffff;
      --text-third:##990099;
      --bg-box2:rgba(255, 255, 255, 0.2); */
    }

    return (
        <div >
            <i className={!toggle ? "fas fa-toggle-on" : "fas fa-toggle-off"} onClick={darkMode}></i>
        </div>
    )
}
