import React from 'react'
import './About.css'
import '../../App.css'
import rita from '../../assets/images/rita.png'
import git from '../../assets/images/git.png'
import figma from '../../assets/images/figma.png'
import illustrator from '../../assets/images/illustrator.png'
import photoshop from '../../assets/images/photoshop.png'
import slack from '../../assets/images/slack.png'
import vscode from '../../assets/images/vscode.png'
import { Count } from '..'
import Slider from "react-slick";
import GoTo from '../Utils/GoTo'
import { Zoom, Fade } from 'react-reveal';

const About = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        // autoplaySpeed: 1000,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <GoTo />
            <section className='aboutPage'>
                <div className='r-container'>
                    <div className='row'>
                        <h1>About</h1>
                        <div className='col-lg-5 col-12 image' style={{ display: "flex", justifyContent: "flex-end" }}>
                            <div>
                                <Zoom duration={2000}>
                                    <img src={rita} />
                                </Zoom>
                            </div>
                        </div>
                        <div className='col-lg-7 col-12'>
                            <div className='about_me'>
                                <Fade right>
                                    <h5>About Me</h5>
                                    <h3>A Web Developer & UI/UX Designer Based in Nigeria.</h3>
                                    <p>I am a creative Front-End Developer, experienced in providing high-impact web
                                        solutions for diverse organizations. Proficient in HTML, CSS, jQuery, and JavaScript;
                                        plus modern libraries and frameworks. I am skilled in designing, developing and testing multiple
                                        web-based applications incorporating a range of technologies. Aspiring to combine broad
                                        background with strong technical skills to excel as a Front-End Developer.
                                    </p>

                                    <div className='about_contact'>
                                        <div className='row'>
                                            <div className='col-lg-6 col-md-6 col-12'>
                                                <p><span>Name: </span>Rita London</p>
                                                <p><span>Address: </span>Port Harcourt, RS. Nigeria</p>
                                                <p><span>Zip Code: </span>500102</p>
                                            </div>
                                            <div className='col-lg-6 col-md-6 col-12'>
                                                <p><span>Email: </span>augustineritalondon@gmail.com</p>
                                                <p><span>Phone: </span>+234 906 7598 578</p>
                                            </div>
                                        </div>
                                    </div>

                                    <button className='mt-5'><a href={require('../../assets/AUGUSTINE.pdf')} target="_blank">Download CV</a></button>
                                </Fade>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='countDown'>
                <div className='c-container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-12 mb-4'>
                            <div className='countCard'>
                                {/* <h2 className='counter'>23</h2> */}
                                <Count  duration={500} amount={6} />
                                <p>Total Projects</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12 mb-4'>
                            <div className='countCard'>
                                {/* <h2 className='counter'>11</h2> */}
                                <Count  duration={500} amount={3} />
                                <p>On Going Projects</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12 mb-4'>
                            <div className='countCard'>
                                <h2 className='flex' style={{justifyContent: "center"}}><span><Count  duration={100} amount={85}/></span>%</h2>
                                <p>Job Success</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='skills'>
                <div className='r-container'>
                    <div className='heading'>
                        <hr className='hr' />
                        <h5>Skills</h5>
                        <h2>My Skills</h2>
                    </div>

                    <div>
                        <div class="row skills-wrappers">
                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="skills-items">
                                    <h6>JavaScript</h6>
                                    <div class="skills-progress">
                                        <div class="skills-progress-bar javascript">
                                            {/* <span>70%</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="skills-items">
                                    <h6>ReactJs</h6>
                                    <div class="skills-progress">
                                        <div class="skills-progress-bar javascript">
                                            {/* <span>74%</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="skills-items">
                                    <h6>Photoshop</h6>
                                    <div class="skills-progress">
                                        <div class="skills-progress-bar javascript">
                                            {/* <span>80%</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="skills-items">
                                    <h6>NodeJs</h6>
                                    <div class="skills-progress">
                                        <div class="skills-progress-bar javascript">
                                            {/* <span>45%</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="skills-items">
                                    <h6>HTML</h6>
                                    <div class="skills-progress">
                                        <div class="skills-progress-bar javascript">
                                            {/* <span>90%</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="skills-items">
                                    <h6>Angular</h6>
                                    <div class="skills-progress">
                                        <div class="skills-progress-bar javascript">
                                            {/* <span>60%</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="skills-items">
                                    <h6>Illustrator</h6>
                                    <div class="skills-progress">
                                        <div class="skills-progress-bar javascript">
                                            {/* <span>80%</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="skills-items">
                                    <h6>SEO</h6>
                                    <div class="skills-progress">
                                        <div class="skills-progress-bar javascript">
                                            {/* <span>60%</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="skills-items">
                                    <h6>CSS</h6>
                                    <div class="skills-progress">
                                        <div class="skills-progress-bar javascript">
                                            {/* <span>90%</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="skills-items">
                                    <h6>Figma</h6>
                                    <div class="skills-progress">
                                        <div class="skills-progress-bar javascript">
                                            {/* <span>75%</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="skills-items">
                                    <h6>Bootstrap</h6>
                                    <div class="skills-progress">
                                        <div class="skills-progress-bar javascript">
                                            {/* <span>85%</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="skills-items">
                                    <h6>GIT</h6>
                                    <div class="skills-progress">
                                        <div class="skills-progress-bar javascript">
                                            {/* <span>70%</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='tools'>
                <div className='r-container'>
                    <div className='heading'>
                        <hr className='hr' />
                        <h5>Tools</h5>
                        <h2>Some Tools I Use</h2>
                    </div>

                    <div className='tools_slider'>
                        <Slider {...settings}>
                            <div className='slider_item'>
                                <img src={git} />
                            </div>
                            <div className='slider_item'>
                                <img src={slack} />
                            </div>
                            <div className='slider_item'>
                                <img src={vscode} />
                            </div>
                            <div className='slider_item'>
                                <img src={figma} />
                            </div>
                            <div className='slider_item'>
                                <img src={photoshop} />
                            </div>
                            <div className='slider_item'>
                                <img src={illustrator} />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
