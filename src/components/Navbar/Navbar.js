import React, { useState } from 'react';
import images from "../../assets/images/image.js";
import './Navbar.css';
import '../../App.css';
import logd from '../../assets/images/logo1.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className='navbar'>
                <div className='r-container mt-3'>
                    <div className='row navbar'>
                        <div className='col-lg-6'>
                            <img src={logd} alt='rita' className='logo' /> <span>Rita London</span>
                        </div>
                        <div className='col-lg-6' style={{ display: "flex", justifyContent: "flex-end" }}>
                            <div className='menu_list'>
                                <ul className='flex'>
                                    <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                                    <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                                    <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
                                    <li><NavLink to="/port" activeClassName="active">portfolio</NavLink></li>
                                    <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <nav className='navbar-mobile'>
                <div className='r-container mt-3'>
                    <div className='row'>
                        <span className="menu-icon menu-bars text-end" onClick={handleClick}>
                            <i class="fas fa-bars"></i>
                        </span>


                        <div className='col-lg-6'>
                                <img src={logd} alt='rita' className='logo'/> <span>Rita London</span>
                        </div>

                        <div className={
                            click ? "navbar-mobile-style slide" : "navbar-mobile-style"
                        }>

                            <span className="menu-icon" onClick={handleClick}>
                                <i class="fas fa-times"></i>
                            </span>

                            
                            <ul>
                                <li onClick={handleClick}><NavLink to="/" activeClassName="active">Home</NavLink></li>
                                <li onClick={handleClick}><NavLink to="/about" activeClassName="active">About</NavLink></li>
                                <li onClick={handleClick}><NavLink to="/services" activeClassName="active">Services</NavLink></li>
                                <li onClick={handleClick}><NavLink to="/port" activeClassName="active">portfolio</NavLink></li>
                                <li onClick={handleClick}><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
