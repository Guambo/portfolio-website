import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__title">Nicholas Vallejos</div>
            <div className="header__sections">
                <p>About</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default Header;
