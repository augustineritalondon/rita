import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { Fade } from 'react-awesome-reveal'

const Footer = () => {
    return (
        <footer className='binjan-footer'>
            {/* Preserved vector shape decorator */}
            <div className='footer-vector-shape'></div>

            <div className='bf-container'>
                {/* ── Top Row: 2-column layout matching reference ── */}
                <Fade bottom duration={900}>
                    <div className='bf-main-grid'>
                        {/* LEFT COLUMN: Large CTA */}
                        <div className='bf-cta-col'>
                            <h2 className='bf-cta-heading'>
                                Let’s make something<br />
                                amazing together.
                            </h2>

                            <div className='bf-saying-hi'>
                                <span className='bf-saying-text'>Start by </span>
                                <a
                                    href='mailto:augustineritalondon@gmail.com'
                                    className='bf-saying-link'
                                >
                                    saying hi
                                </a>
                            </div>

                            {/* Direct Contact details */}
                            <div className='bf-direct-contact'>
                                <a href='tel:+2349067598578' className='bf-contact-item'>
                                    <span className='bf-contact-icon'>
                                        <i className="fas fa-phone-alt"></i>
                                    </span>
                                    <span>+234 906 7598 578</span>
                                </a>
                                <a href='mailto:augustineritalondon@gmail.com' className='bf-contact-item'>
                                    <span className='bf-contact-icon'>
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                    <span>augustineritalondon@gmail.com</span>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Information & Nav links */}
                        <div className='bf-info-col'>
                            <div className='bf-info-block'>
                                <h4 className='bf-info-title'>Information</h4>
                                <p className='bf-info-address'>
                                    Port Harcourt, Rivers State, Nigeria.<br />
                                    Available for remote opportunities worldwide.
                                </p>
                            </div>

                            {/* Navigation links matching the reference capsule style */}
                            <nav className='bf-nav'>
                                <Link to='/services' className='bf-nav-pill'>
                                    SERVICES
                                </Link>
                                <Link to='/port' className='bf-nav-link'>
                                    WORKS
                                </Link>
                                <Link to='/about' className='bf-nav-link'>
                                    EXPERIENCE
                                </Link>
                                <Link to='/contact' className='bf-nav-link'>
                                    CONTACT
                                </Link>
                            </nav>

                            {/* Social icons */}
                            <div className='bf-socials'>
                                <a href='https://github.com/augustineritalondon' target='_blank' rel='noreferrer' aria-label='GitHub'>
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href='https://www.linkedin.com/in/rita-london-840361147/' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href='https://twitter.com/rita_london' target='_blank' rel='noreferrer' aria-label='Twitter'>
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href='https://web.facebook.com/augustinerita.london' target='_blank' rel='noreferrer' aria-label='Facebook'>
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </Fade>

                {/* ── Bottom Row: Copyright + Signature Bar ── */}
                <div className='bf-bottom-bar'>
                    <div className='bf-brand-sign'>
                        <span className='bf-signature'>Rita</span>
                        <span className='bf-copyright'>© {new Date().getFullYear()}. All Rights Reserved</span>
                    </div>

                    <div className='bf-credit'>
                        <span>Designed & Developed with <i className="fas fa-heart bf-heart"></i> by Rita London</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
