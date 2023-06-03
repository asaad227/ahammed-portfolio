import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.css"
import "./projectData.css"
import myData from '../../lib/files';

import { Carousel } from 'react-responsive-carousel';
import SocialLink from '../Social-links';
import Nav from '../Nav';

export default function ProjectData() {
    const [data,] = useState(myData)
    return (
        <div>
          <Nav/>
            <Carousel className='sliderDiv'>
                {data.map(e => {
                    return (<div className='projectMain' key={e.id}>
                        <h1 >{e.app}</h1>
                        <a  href={e.url}>App
                        <i className="fa fa-link"></i>
                        </a> 
                        <a  href={e.github}>
                        <i className="fa fa-github"></i>Repo
                        </a>
                        <img  src={e.project} alt={e.name} />
                    </div>)
                })}
            </Carousel>
            <SocialLink />
        </div>
    );
}
