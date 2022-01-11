import React, { useState } from 'react'
import './Home.css'
import '../../App.css'
import image from '../../assets/images/rita.png'
import aboutImage from '../../assets/images/rita2.png'
import { Link } from 'react-router-dom'
import { ReactProjects, Angular, Ui, Graphics, Manipulation } from '../../components'
import { Zoom, Fade } from 'react-reveal';
import GoTo from '../Utils/GoTo'

const Home = () => {

    const [active, setActive] = useState("first")

    return (
        <>
            <GoTo />
            <section className='home'>
                <div className='shape'></div>
                <div className='r-container'>
                    <div>
                        <div className='row'>
                            <div className='col-lg-1 col-12'></div>
                            <div className='col-lg-5 col-12'>
                                <div className='details'>
                                    <div className='det'>
                                        <Fade top duration={2000}><h5>Hello, I am</h5></Fade>
                                        <Fade left duration={2000}><h1>Rita London</h1></Fade>
                                        <Fade bottom duration={2000}><h5>Web Developer (Frontend)</h5></Fade>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-5' style={{ display: "flex", justifyContent: "flex-end" }}>
                                <div className='image'>
                                    <div className='imgs'>
                                        <Zoom duration={2000}>
                                            <img src={image} />
                                        </Zoom>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-1'>
                                <div className='icons'>
                                    <ul>
                                        <Fade right>
                                            <li><a href='#' target='_blank'><i class="fab fa-facebook-f facebook"></i></a></li>
                                            <li><a href='#' target='_blank'><i class="fab fa-twitter twitter"></i></a></li>
                                            <li><a href='https://www.linkedin.com/in/rita-london-840361147/' target='_blank'><i class="fab fa-linkedin-in linkedin"></i></a></li>
                                            <li><a href='https://github.com/augustineritalondon' target='_blank'><i class="fab fa-github github"></i></a></li>
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
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <div className='services-card'>
                                <i class="fas fa-laptop-code"></i>
                                <Fade bottom>
                                    <h4>Web Development(Frontend)</h4>
                                    <p>Development of the graphical user interface of a website to ensure that the website visicators can easily interact with the page.</p>
                                </Fade>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <div className='services-card'>
                                <i class="fas fa-pencil-ruler"></i>
                                <Fade bottom>
                                    <h4>Ui/Ux Design</h4>
                                    <p>Creating of user-centered designs by understanding the requirement and feedback of a client.</p>
                                </Fade>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <div className='services-card'>
                                <i class="fas fa-pencil-ruler"></i>
                                <Fade bottom>
                                    <h4>Graphics Design</h4>
                                    <p>Creating of visual concepts to communicate information which includes: logos, flyers, mockups, brochures, business cards, etc.</p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='about'>
                <div className='r-container a-cont'>
                    <div className='about_shape'></div>
                    <div className='row'>
                        <div className='col-lg-5 col-md-5 col-12'>
                            <div className='aboutImage'>
                                <Zoom>
                                    <img src={aboutImage} />
                                </Zoom>
                            </div>
                        </div>
                        <div className='col-lg-7 col-md-7 col-12 b-container'>
                            <div className='aboutHeading'>
                                <h1>About</h1>
                                <Fade right>
                                    <h3>Hi! I'm Rita</h3>
                                </Fade>
                            </div>
                            <div className='aboutBody'>
                                <Fade right>
                                    <p>I am a creative Front-End Developer, experienced in providing high-impact web
                                        solutions for diverse organizations. Proficient in HTML, CSS, jQuery, and JavaScript;
                                        plus modern libraries and frameworks. I am skilled in designing, developing and testing multiple
                                        web-based applications incorporating a range of technologies. Aspiring to combine broad
                                        background with strong technical skills to excel as a Front-End Developer.
                                    </p>
                                    <h5>Contact me here!</h5>
                                    <p>Email: augustineritalondon@gmail.com</p>
                                    <p>Phone: +234 906 7598 578</p>
                                    <div className='icons' style={{ margin: 0, padding: 0 }}>
                                        <ul style={{ margin: 0, padding: 0 }}>
                                        <li><a href='#' target='_blank'><i class="fab fa-facebook-f facebook"></i></a></li>
                                            <li><a href='#' target='_blank'><i class="fab fa-twitter twitter"></i></a></li>
                                            <li><a href='https://www.linkedin.com/in/rita-london-840361147/' target='_blank'><i class="fab fa-linkedin-in linkedin"></i></a></li>
                                            <li><a href='https://github.com/augustineritalondon' target='_blank'><i class="fab fa-github github"></i></a></li>
                                        </ul>
                                    </div>

                                    <button><a href={require('../../assets/AUGUSTINE.pdf')} target="_blank">Download CV</a></button>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='portfolio'>
                <div className='r-container'>
                    <div className='heading'>
                        <hr className='hr' />
                        <h5>Portfolio</h5>
                        <h2>Checkout a few of my works</h2>
                    </div>

                    <ul className='mb-5'>
                        <li onClick={() => setActive("first")}><Link to="" className={active === "first" ? 'active' : null}>React</Link></li>
                        <li onClick={() => setActive("second")}><Link to="" className={active === "second" ? 'active' : null}>Angular</Link></li>
                        <li onClick={() => setActive("third")}><Link to="" className={active === "third" ? 'active' : null}>Ui/Ux Design</Link></li>
                        <li onClick={() => setActive("fourth")}><Link to="" className={active === "fourth" ? 'active' : null}>Graphics</Link></li>
                        <li onClick={() => setActive("fifth")}><Link to="" className={active === "fifth" ? 'active' : null}>Photo Manipulation</Link></li>
                    </ul>

                    <div>
                        {active === "first" && <ReactProjects />}
                        {active === "second" && <Angular />}
                        {active === "third" && <Ui />}
                        {active === "fourth" && <Graphics />}
                        {active === "fifth" && <Manipulation />}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
