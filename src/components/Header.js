import React from 'react';
import Navbar from './Navbar';
import ('../App.css');
import ('./header.css');

function Header(props) {
    return (
        <div className="header-basic">
        <header>
            <Navbar />
            <div className="column">
                <h1>Sadie</h1>
                <h2>Full-Stack Web Developer</h2>
            </div>
            </header>
        </div>
    );
}

export default Header;