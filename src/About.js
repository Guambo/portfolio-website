import React from 'react';
import './About.css';
import Resume from './SeniorResume.docx';
import Profile from './propic.png';

function About() {
    return (
        <div className="about" id="about">
            
            <div className="about__backgroundImage"></div>
            
            
            <div className="about__main">
                <div className="about__card">
                    <img className="about__card__profile" src={Profile}/>
                    <div className="about__card__title">About Me</div>
                    <p>Hi! I'm a 22 year old C#/Java programmer, 2D artist, and independent game developer. I recently graduated from Binghamton University with a B.S. in Computer Science in May 2020. Currently, I am pursuing positions in both frontend and backend web development. I am interested in using cutting-edge web development technologies such as Node and React to deliver responsive websites.</p>
                </div>
                
                <div className="about__card">
                    <div className="about__card__title">Programming Languages</div>
                    <div className="about__card__lists">
                        <div>
                            <p>· Java (4 years)</p>
                            <p>· C# (3 years)</p>
                            <p>· C++ (3 years)</p>
                        </div>
                        <div>
                            <p>· JavaScript (1 year)</p>
                            <p>· Python (1 year)</p>
                            <p>· HTML/CSS (1 year)</p>
                        </div>
                    </div>
                </div>

                <div className="about__card">
                    <div className="about__card__title">Favorite Tools</div>
                    <div className="about__card__lists">
                        <div>
                            <p>· git (4 years)</p>
                            <p>· Unity3D (3 years)</p>
                            <p>· VS2019 / VSCode</p>
                        </div>
                        <div>
                            <p>· bash (4 years)</p>
                            <p>· Trello</p>
                            <p>· Github</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about__links">
                <a className="about__card" href={Resume} target="_blank">Resume</a>
                <a className="about__card" href="https://github.com/NPVallejos?tab=repositories">Github</a>
                <a className="about__card" href="https://www.linkedin.com/in/nicholas-vallejos/">Linkedin</a>
            </div>

        </div>
    )
}

export default About;
