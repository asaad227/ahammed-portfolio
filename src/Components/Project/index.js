import React, {useState} from "react";
import "./index.css";
import Nav from "../Nav";
import myData from "../../lib/files"
export default function Project() {

  const [data, setData] = useState(myData)

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
   
          

    </div>
  );
}
