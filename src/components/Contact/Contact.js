import React from 'react'
import './Contact.css'
import GoTo from '../Utils/GoTo'
import { Fade } from 'react-awesome-reveal'

const Contact = () => {
    return (
        <>
            <GoTo />
            <main className='contact-standalone'>
                {/* Background decorative shape */}
                <div className='contact-bg-shape'></div>

                <div className='contact-container'>
                    <Fade bottom duration={900} triggerOnce>
                        <div className='contact-hero-card'>

                            {/* Status badge */}
                            <div className='contact-badge'>
                                <span className='contact-pulse-dot'></span>
                                <span>Available for full-time roles & contract work</span>
                            </div>

                            {/* Main large heading */}
                            <h1 className='contact-main-heading'>
                                Let’s connect & discuss opportunities.
                            </h1>

                            <p className='contact-desc'>
                                Looking for a senior frontend / fullstack developer or want to consult on an architectural build? Feel free to reach out directly through any of the channels below.
                            </p>

                            {/* Contact channels grid */}
                            <div className='contact-channels-grid'>
                                <a href='mailto:augustineritalondon@gmail.com' className='contact-channel'>
                                    <div className='contact-channel-icon'>
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className='contact-channel-info'>
                                        <span className='contact-channel-label'>Email Address</span>
                                        <span className='contact-channel-val'>augustineritalondon@gmail.com</span>
                                    </div>
                                </a>

                                <a href='tel:+2349067598578' className='contact-channel'>
                                    <div className='contact-channel-icon'>
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div className='contact-channel-info'>
                                        <span className='contact-channel-label'>Direct Line / WhatsApp</span>
                                        <span className='contact-channel-val'>+234 906 7598 578</span>
                                    </div>
                                </a>

                                <div className='contact-channel'>
                                    <div className='contact-channel-icon'>
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className='contact-channel-info'>
                                        <span className='contact-channel-label'>Location & Availability</span>
                                        <span className='contact-channel-val'>Port Harcourt, Nigeria (Open to Worldwide Remote)</span>
                                    </div>
                                </div>
                            </div>

                            {/* Socials bar */}
                            <div className='contact-footer-bar'>
                                <div className='contact-quick-links'>
                                    <span className='contact-quick-label'>Connect with me:</span>
                                </div>

                                <div className='contact-social-icons'>
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
                </div>
            </main>
        </>
    )
}

export default Contact
