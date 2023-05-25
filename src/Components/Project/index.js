import React, { useState } from "react";
import "./index.css";
import Nav from "../Menu2";
import myData from "../../lib/files"
export default function Project() {

  const [data,] = useState(myData)

  return (
    <div className="project">
      <header>
        <Nav />

      </header>
      <div className="flex-container">
        {data.map(e => {
          return (<div className="flex-box" key={e.id}>
            <a href={e.url}>
              <h2>{e.name}</h2>
            </a>
            <p>{e.text}</p>
            <img src={e.project} alt={e.name} loading="lazy" />
          </div>)
        })}
      </div>

    </div>
  );
}
