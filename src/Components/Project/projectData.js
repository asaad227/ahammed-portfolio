import React,{useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.css"
import "./projectData.css"
import myData from '../../lib/files';
import Nav from '../Nav';
import { Carousel } from 'react-responsive-carousel';

export default function ProjectData() {
    const [data, ] = useState(myData)
    return (
        <div>
             <header>
        <Nav />
      </header>
        <Carousel className='sliderDiv'>
         {data.map(e=>{
      return (<div    key={e.id}>
      <a href={e.url}>
      <h4>{e.name}</h4>
      </a>
      <img src={e.project} alt={e.name}/>
      </div>)
    })}
    </Carousel>
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
    </div>
    );
}
