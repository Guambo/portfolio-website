import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about" id="about">
            
            <div className="about__backgroundImage"></div>
            
            <div className="about__content">
                <div className="about__main">
                    <div className="about__card">
                        <div className="about__title">About Me</div>
                        <p>Hi! I'm a 22 year old C#/Java programmer, 2D artist, and independent game developer. I recently graduated from Binghamton University with a B.S. in Computer Science in May 2020. Currently, I am pursuing positions in both frontend and backend web development. I am interested in using cutting-edge web development technologies such as Node and React to deliver responsive websites.</p>
                    </div>
                </div>

                <div className="about__footer">
                    <div className="about__card">
                        <p>Resume</p>
                    </div>
                    <div className="about__card">
                        <p>Github</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;
