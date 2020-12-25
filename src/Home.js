import React from 'react';
import './Home.css';
import About from './About.js';
import ProjectSection from './ProjectSection.js';

function Home() {
    return (
        <div className="home">
            <About />
            <ProjectSection />
            { /* Contact Component */ }
        </div>
    )
}

export default Home
