import React from 'react';
import ('../App.css');
import ('./navbar.css');

function Navbar({ currentPage, setCurrentPage }) {
    return (
        <nav>
            <div className="nav-bar">
                <div className="nav-bar-content">
                        <div className="nav-bar-content-right-links">
                            <a href="/">Home</a>
                            <a href="/portfolio">Portfolio</a>
                            <a href="/about-me">About Me</a>
                            <a href="/contact-me">Contact Me</a>
                        </div>
                    </div>
                </div>
        </nav>                
    );
}

export default Navbar;