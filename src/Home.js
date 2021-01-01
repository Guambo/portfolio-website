import React from 'react';
import './Home.css';
import About from './About.js';
import ProjectSection from './ProjectSection.js';
import Contact from './Contact.js';

function Home() {
    return (
        <div className="home">
            <About />
            <ProjectSection />
            <Contact />
        </div>
    )
}

export default Home
