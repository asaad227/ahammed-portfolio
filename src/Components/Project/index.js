import React, {useState} from "react";
import "./index.css";
import Nav from "../Nav";
import myData from "../../lib/files"
import SocialLink from "../Social-links";
export default function Project() {

  const [data,] = useState(myData)

  return (
    <div className="project">
      <header>
        <Nav />
      
      </header>
    <div className="flex-container">
    {data.map(e=>{
      return (<div className="flex-box" key={e.id}>
      <a href={e.url}>
      <h2>{e.name}</h2>
      </a>
      <p>{e.text}</p>
      <img src={e.project} alt={e.name}/>
      </div>)
    })}
    </div>
   
    <SocialLink/>

    </div>
  );
}
