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
                    return (<div key={e.id}>
                        <a href={e.url}>
                            <h4>App-Link</h4>
                        </a>
                        <a href={e.github}>
                            <h4>& GitHub-Repo</h4>
                        </a>
                        <img className='projectImg' src={e.project} alt={e.name} />
                    </div>)
                })}
            </Carousel>
            <SocialLink />
        </div>
    );
}
