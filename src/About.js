import React from 'react';
import './About.css';
import about from './about.jpg';

function About() {
    return (
        <div className="about">
            <img src={about}/>
            <div className="about__description">
                <div className="about__title">About</div>
                <p>Hi! I'm a 22 year old C#/Java programmer, 2D artist, and independent game developer. I recently graduated from Binghamton University with a B.S. in Computer Science in May 2020. Currently, I am pursuing positions in both frontend and backend web development. I am interested in using cutting-edge web development technologies such as Node and React to deliver responsive websites.</p>
            </div>
        </div>
    )
}

export default About;
