import React from 'react'
import './About.css'
import '../../App.css'

import git from '../../assets/images/git.png'
import figma from '../../assets/images/figma.png'
import illustrator from '../../assets/images/illustrator.png'
import photoshop from '../../assets/images/photoshop.png'
import slack from '../../assets/images/slack.png'
import vscode from '../../assets/images/vscode.png'
import { Count } from '..'
import Slider from "react-slick";
import GoTo from '../Utils/GoTo'
import { Fade } from 'react-awesome-reveal';

const About = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 0,
        cssEase: "linear",
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
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
                    <div className='row justify-content-center'>
                        <h1>About</h1>
                        <div className='col-lg-10 col-12'>
                            <div className='about_me text-center'>
                                <Fade bottom>
                                    <h5>About Me</h5>
                                    <h3>A Fullstack Developer & Web Architect Based in Nigeria.</h3>
                                    <p>I am a highly motivated Fullstack Developer driven by the challenge of building scalable, user-centric applications. With a focus on quality and modern architecture, I specialize in crafting seamless digital experiences from front-to-back. I thrive in collaborative environments and am passionate about finding elegant solutions to complex problems through continuous learning and innovation.
                                    </p>

                                    <div className='about_contact'>
                                        <div className='row justify-content-center mt-4'>
                                            <div className='col-lg-4 col-md-6 col-12'>
                                                <p><span>Name: </span>Rita London</p>
                                                <p><span>Address: </span>Port Harcourt, RS. Nigeria</p>
                                            </div>
                                            <div className='col-lg-4 col-md-6 col-12'>
                                                <p><span>Email: </span>augustineritalondon@gmail.com</p>
                                                <p><span>Phone: </span>+234 906 7598 578</p>
                                            </div>
                                        </div>
                                    </div>
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
                                <Count duration={500} amount={8} />
                                <p>Total Projects</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12 mb-4'>
                            <div className='countCard'>
                                {/* <h2 className='counter'>11</h2> */}
                                <Count duration={500} amount={3} />
                                <p>On Going Projects</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12 mb-4'>
                            <div className='countCard'>
                                <h2 className='flex' style={{ justifyContent: "center" }}><span><Count duration={100} amount={85} /></span>%</h2>
                                <p>Job Success</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='experience'>
                <div className='container-e'>
                    <h3 style={{fontWeight: 300, fontSize: "32px", color: "#fff", paddingBottom: "25px"}}>Experience</h3>
                    <div className='experience-content'>
                        <div className='row'>
                            <div className='col-8'><span style={{color:"#fff"}}>Frontend Web Developer </span> - 100Pay  <br/>Port Harcourt, Nigeria.</div>
                            <div className='col-4' style={{display:"flex", justifyContent:"right"}}>2024 - present</div>
                        </div>
                    </div>
                    <div className='experience-content'>
                        <div className='row'>
                            <div className='col-8'><span style={{color:"#fff"}}>Frontend Web Developer </span> - Techfaithful  <br/>Port Harcourt, Nigeria.</div>
                            <div className='col-4' style={{display:"flex", justifyContent:"right"}}>2022 - 2024</div>
                        </div>
                    </div>
                    <div className='experience-content'>
                        <div className='row'>
                            <div className='col-8'><span style={{color:"#fff"}}>Web Developer </span> - Harvoxx Techhub  <br/>Port Harcourt, Nigeria.</div>
                            <div className='col-4' style={{display:"flex", justifyContent:"right"}}>2021 - 2022</div>
                        </div>
                    </div>
                    <div className='experience-content'>
                        <div className='row'>
                            <div className='col-8'><span style={{color:"#fff"}}>Freelance Web Developer </span>  <br/>Port Harcourt, Nigeria.</div>
                            <div className='col-4' style={{display:"flex", justifyContent:"right"}}>2021</div>
                        </div>
                    </div>
                    <div className='experience-content'>
                        <div className='row'>
                            <div className='col-8'><span style={{color:"#fff"}}>Web Manager </span> - De-Willex Global Limited  <br/>Lagos, Nigeria.</div>
                            <div className='col-4' style={{display:"flex", justifyContent:"right"}}>2020 - 2021</div>
                        </div>
                    </div>
                    <div className='experience-content'>
                        <div className='row'>
                            <div className='col-8'><span style={{color:"#fff"}}>Fronted Web Developer (Intern) </span> - CLE Engineering Nig. Ltd.  <br/>Port Harcourt, Nigeria.</div>
                            <div className='col-4' style={{display:"flex", justifyContent:"right"}}>2017 - 2018</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='experience'>
                <div className='container-e'>
                    <h3 style={{fontWeight: 300, fontSize: "32px", color: "#fff", paddingBottom: "25px"}}>Education</h3>
                    <div className='experience-content'>
                        <div className='row'>
                            <div className='col-8'><span style={{color:"#fff"}}>Bachelor of Science in Computer Science </span> - Nkwame Nkrumah University of Science and Technology   <br/>Koforidua, Ghana.</div>
                            <div className='col-4' style={{display:"flex", justifyContent:"right"}}>2015 - 2019</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='skills'>
                <div className='r-container'>
                    <div className='heading'>
                        <hr className='hr' />
                        <h5>Skills</h5>
                        <h2>Expertise</h2>
                    </div>

                    <div>
                        <div class="row skills-wrappers">
                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="skills-items">
                                    <h6>JavaScript (ES6+)</h6>
                                    <div class="skills-progress">
                                        <div class="skills-progress-bar w-90"></div>
                                    </div>
                                </div>
                                <div class="skills-items">
                                    <h6>React.js / Next.js</h6>
                                    <div class="skills-progress">
                                        <div class="skills-progress-bar w-85"></div>
                                    </div>
                                </div>
                                <div class="skills-items">
                                    <h6>TypeScript</h6>
                                    <div class="skills-progress">
                                        <div class="skills-progress-bar w-80"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="skills-items">
                                    <h6>Node.js / Express</h6>
                                    <div class="skills-progress">
                                        <div class="skills-progress-bar w-75"></div>
                                    </div>
                                </div>
                                <div class="skills-items">
                                    <h6>MongoDB / MySQL</h6>
                                    <div class="skills-progress">
                                        <div class="skills-progress-bar w-70"></div>
                                    </div>
                                </div>
                                <div class="skills-items">
                                    <h6>RESTful APIs / GraphQL</h6>
                                    <div class="skills-progress">
                                        <div class="skills-progress-bar w-80"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="skills-items">
                                    <h6>Tailwind CSS / SCSS</h6>
                                    <div class="skills-progress">
                                        <div class="skills-progress-bar w-90"></div>
                                    </div>
                                </div>
                                {/* <div class="skills-items">
                                    <h6>Docker / AWS</h6>
                                    <div class="skills-progress">
                                        <div class="skills-progress-bar w-60"></div>
                                    </div>
                                </div> */}
                                <div class="skills-items">
                                    <h6>Git / GitHub</h6>
                                    <div class="skills-progress">
                                        <div class="skills-progress-bar w-85"></div>
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
                        <h2>Development Suite</h2>
                    </div>

                    <div className='tools_slider'>
                        <Slider {...settings}>
                            <div className='slider_item'>
                                <img src={git} alt="Git" />
                            </div>
                            <div className='slider_item'>
                                <img src={slack} alt="Slack" />
                            </div>
                            <div className='slider_item'>
                                <img src={vscode} alt="VS Code" />
                            </div>
                            <div className='slider_item'>
                                <img src={figma} alt="Figma" />
                            </div>
                            <div className='slider_item'>
                                <img src={photoshop} alt="Photoshop" />
                            </div>
                            <div className='slider_item'>
                                <img src={illustrator} alt="Illustrator" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
