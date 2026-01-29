import React, { useState } from 'react'
import './Home.css'
import '../../App.css'
import image from '../../assets/images/rita.png'
import { Link } from 'react-router-dom'
import { WorkHistory } from '../../components'
import { Zoom, Fade } from 'react-awesome-reveal';
import GoTo from '../Utils/GoTo'
import webDevIcon from '../../assets/images/laptop.png'
import uiUxIcon from '../../assets/images/ui-ux.png'
import mobileDevIcon from '../../assets/images/mobile.png'

const Home = () => {

    return (
        <>
            <GoTo />
            <section className='home'>
                <div className='floating-orbs'>
                    <div className='orb orb-1'></div>
                    <div className='orb orb-2'></div>
                    <div className='orb orb-3'></div>
                </div>
                <div className='shape'></div>
                <div className='r-container'>
                    <div>
                        <div className='row'>
                            <div className='col-lg-1 col-12'></div>
                            <div className='col-lg-5 col-12'>
                                <div className='details'>
                                    <div className='det'>
                                        <Fade top duration={1500}>
                                            <div className='greeting'>
                                                <span className='wave'>👋</span>
                                                <h5>Hello, I am</h5>
                                            </div>
                                        </Fade>
                                        <Fade left duration={1500} delay={200}>
                                            <h1 className='gradient-text'>Rita London</h1>
                                        </Fade>
                                        <Fade bottom duration={1500} delay={400}>
                                            <h3 className='role-title'>Fullstack Developer</h3>
                                        </Fade>
                                        {/* <Fade bottom duration={1500} delay={600}>
                                            <p className='hero-description'>
                                                Crafting exceptional digital experiences with modern web technologies
                                            </p>
                                        </Fade> */}
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-5' style={{ display: "flex", justifyContent: "flex-end" }}>
                                <div className='image'>
                                    <div className='imgs'>
                                        <div className='image-glow'></div>
                                        <Zoom duration={2000}>
                                            <img src={image} alt="Rita London" />
                                        </Zoom>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-1'>
                                <div className='icons'>
                                    <ul>
                                        <Fade right delay={1000}>
                                            <li><a href='#' target='_blank' rel='noopener noreferrer'><i className="fab fa-facebook-f facebook"></i></a></li>
                                            <li><a href='#' target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter twitter"></i></a></li>
                                            <li><a href='https://www.linkedin.com/in/rita-london-840361147/' target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin-in linkedin"></i></a></li>
                                            <li><a href='https://github.com/augustineritalondon' target='_blank' rel='noopener noreferrer'><i className="fab fa-github github"></i></a></li>
                                        </Fade>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='services mt-5'>
                <div className='services_shape'></div>
                <div className='r-container'>
                    <div className='heading'>
                        <hr className='hr' />
                        <h5>What I Do</h5>
                        <h2>My Services</h2>
                    </div>
                    <div className='row flex-wrap'>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <Zoom duration={1500}>
                                <div className='services-card'>
                                    <div className='icon-wrapper'>
                                        <img src={webDevIcon} alt="Web Development" className='service-icon' />
                                    </div>
                                    <Fade bottom delay={200}>
                                        <h4>Web Development (Fullstack)</h4>
                                        <p>Development of the graphical user interface of a website to ensure that the website visitors can easily interact with the page.</p>
                                    </Fade>
                                </div>
                            </Zoom>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <Zoom duration={1500} delay={200}>
                                <div className='services-card'>
                                    <div className='icon-wrapper'>
                                        <img src={uiUxIcon} alt="UI/UX Design" className='service-icon' />
                                    </div>
                                    <Fade bottom delay={400}>
                                        <h4>Ui/Ux Design</h4>
                                        <p>Creating of user-centered designs by understanding the requirement and feedback of a client.</p>
                                    </Fade>
                                </div>
                            </Zoom>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <Zoom duration={1500} delay={400}>
                                <div className='services-card'>
                                    <div className='icon-wrapper'>
                                        <img src={mobileDevIcon} alt="Mobile Development" className='service-icon' />
                                    </div>
                                    <Fade bottom delay={600}>
                                        <h4>Mobile Development (Frontend)</h4>
                                        <p>Development of mobile applications for both Android and iOS platforms to provide users with a seamless mobile experience.</p>
                                    </Fade>
                                </div>
                            </Zoom>
                        </div>
                    </div>
                </div>
            </section>

            <section className='about'>
                <div className='r-container a-cont'>
                    <div className='about_shape'></div>
                    <div className='row justify-content-center'>
                        <div className='col-lg-10 col-md-11 col-12 b-container'>
                            <div className='aboutHeading'>
                                <h1>About</h1>
                                <Fade right>
                                    <h3>Hi! I'm Rita</h3>
                                </Fade>
                            </div>
                            <div className='aboutBody'>
                                <Fade right>
                                    <p>I am a very passionate Web Developer & Designer driven by quality & perfection. I am highly adaptive, culturally sensitive, and proactive. I love to spend my time finding realistic solutions for uncomfortable problems. I enjoy responsibility and accountability. Although I always strive to push myself past my limits, I strongly believe in the power of teamwork and base my efforts around working well with others as a part of my software development journey.
                                    </p>
                                    <h5>Contact me here!</h5>
                                    <p>Email: augustineritalondon@gmail.com</p>
                                    <p>Phone: +234 906 7598 578</p>
                                    <div className='icons' style={{ margin: 0, padding: 0 }}>
                                        <ul style={{ margin: 0, padding: 0 }}>
                                            <li><a href='#' target='_blank' rel='noopener noreferrer'><i className="className='fab fa-facebook-f facebook'"></i></a></li>
                                            <li><a href='#' target='_blank'><i class="fab fa-twitter twitter"></i></a></li>
                                            <li><a href='https://www.linkedin.com/in/rita-london-840361147/' target='_blank'><i class="fab fa-linkedin-in linkedin"></i></a></li>
                                            <li><a href='https://github.com/augustineritalondon' target='_blank'><i class="fab fa-github github"></i></a></li>
                                        </ul>
                                    </div>

                                    {/* <button><a href={require('../../assets/AUGUSTINE.pdf')} target="_blank">Download CV</a></button> */}
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WorkHistory />
        </>
    )
}

export default Home
