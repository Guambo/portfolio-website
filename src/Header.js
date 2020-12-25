import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__title">Nicholas Vallejos</div>
            <div className="header__sections">
                <a href="#about"><p>About</p></a>
                <a href="#projects"><p>Projects</p></a>
                <a href="#contact"><p>Contact</p></a>
            </div>
        </div>
    )
}

export default Header;
