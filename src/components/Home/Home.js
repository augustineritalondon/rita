import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import '../../App.css'
import heroImage from '../../assets/images/1.png'
import resumePdf from '../../assets/AUGUSTINE.pdf'

import Services from '../Services/Services'
import HomeWorkExperience from './HomeWorkExperience'
import ProjectsPortfolio from '../Portfolio/ProjectsPortfolio'
import { Fade } from 'react-awesome-reveal';
import GoTo from '../Utils/GoTo'

const Home = () => {

    const scrollToProjects = (e) => {
        e.preventDefault();
        // Priority target: Lifeskills Connect project card in the projects section
        const target = document.getElementById('project-lifeskills') ||
                       document.getElementById('lifeskills-connect') ||
                       document.getElementById('projects') ||
                       document.getElementById('experience');

        if (target) {
            const yOffset = -70; // offset for fixed header
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <>
            <GoTo />
            <section className='home'>
                {/* Ghost name watermark behind everything */}
                <div className='hero-ghost-name'>
                    <span>Rita London</span>
                </div>

                {/* Two-column hero */}
                <div className='hero-inner'>
                    {/* LEFT: text content */}
                    <div className='hero-content'>
                        <Fade bottom duration={1200} delay={100}>
                            <p className='hero-iam'>Hi, I am</p>
                        </Fade>
                        <Fade left duration={1400} delay={200}>
                            <h1 className='hero-name'>Rita London</h1>
                        </Fade>
                        <Fade bottom duration={1200} delay={400}>
                            <p className='hero-bio'>
                                Frontend focused FullStack Engineer specializing in React, Next.js, TypeScript, React Native, and Node.js. 
                                I build scalable web and mobile applications from cross platform EdTech learning systems to intuitive, accessible user interfaces.
                            </p>
                        </Fade>
                        <Fade bottom duration={1000} delay={600}>
                            <div className='hero-badge'>
                                <span className='hero-badge-dot'></span>
                                Available for Global Remote Roles (UTC+1)
                            </div>
                        </Fade>

                        {/* Direct Action CTAs for Recruiters */}
                        <Fade bottom duration={1000} delay={750}>
                            <div className='hero-actions'>
                                <a
                                    href='#project-lifeskills'
                                    onClick={scrollToProjects}
                                    className='hero-btn hero-btn--primary'
                                >
                                    <span>View Projects</span>
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <polyline points="19 12 12 19 5 12"></polyline>
                                    </svg>
                                </a>

                                <Link
                                    to='/contact'
                                    className='hero-btn hero-btn--secondary'
                                >
                                    <span>Get In Touch</span>
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </Link>

                                <a
                                    href={resumePdf}
                                    download="Augustine_Rita_London_Resume.pdf"
                                    className='hero-btn hero-btn--resume'
                                    title="Download Augustine Rita London Resume"
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                    <span>Resume</span>
                                </a>
                            </div>
                        </Fade>
                    </div>

                    {/* RIGHT: portrait */}
                    <div className='hero-portrait'>
                        <img src={heroImage} alt="Rita London" />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <Services showGoTo={false} showStacks={false} />

            {/* Work Experience Section */}
            <HomeWorkExperience />

            {/* Projects Portfolio Section */}
            <ProjectsPortfolio />
        </>
    )
}

export default Home
