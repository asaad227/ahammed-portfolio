import React,{useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.css"
import "./projectData.css"
import myData from '../../lib/files';
import Nav from '../Nav';
import { Carousel } from 'react-responsive-carousel';
import SocialLink from '../Social-links';

export default function ProjectData() {
    const [data, ] = useState(myData)
    return (
        <div>
        <Nav />
        <Carousel className='sliderDiv'>
         {data.map(e=>{
      return (<div    key={e.id}>
      <a href={e.url}>
      <h4>{e.name}</h4>
      </a>
      <img className='projectImg' src={e.project} alt={e.name}/>
      </div>)
    })}
    </Carousel>
   <SocialLink/>
    </div>
    );
}
