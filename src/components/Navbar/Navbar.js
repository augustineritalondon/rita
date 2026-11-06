import React, { useState } from 'react';

import './Navbar.css';
import '../../App.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            {/* Desktop navbar */}
            <nav className='navbar'>
                <div className='r-container'>
                    <div className='navbar-inner'>
                        <div className='navbar-brand'>
                            <span className='navbar-brand-text'>My Portfolio</span>
                        </div>
                        <ul className='navbar-links'>
                            <li><NavLink exact to="/" activeClassName="active">About</NavLink></li>
                            <li><NavLink to="/services" activeClassName="active">Skills</NavLink></li>
                            <li><NavLink to="/port" activeClassName="active">Projects</NavLink></li>
                            <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Mobile navbar */}
            <nav className='navbar-mobile'>
                <span className="navbar-mobile-brand">My Portfolio</span>
                <button
                    className="menu-toggle-btn"
                    onClick={handleClick}
                    aria-label="Toggle navigation menu"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <div className={click ? "navbar-mobile-style slide" : "navbar-mobile-style"}>
                    <button
                        className="menu-close-btn"
                        onClick={handleClick}
                        aria-label="Close navigation menu"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                        </svg>
                    </button>
                    <ul>
                        <li onClick={handleClick}><NavLink exact to="/" activeClassName="active">About</NavLink></li>
                        <li onClick={handleClick}><NavLink to="/services" activeClassName="active">Skills</NavLink></li>
                        <li onClick={handleClick}><NavLink to="/port" activeClassName="active">Projects</NavLink></li>
                        <li onClick={handleClick}><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar


