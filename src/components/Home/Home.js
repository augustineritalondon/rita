import React from 'react'
import './Home.css'
import '../../App.css'
import heroImage from '../../assets/images/1.png'

import Services from '../Services/Services'
import HomeWorkExperience from './HomeWorkExperience'
import ProjectsPortfolio from '../Portfolio/ProjectsPortfolio'
import { Fade } from 'react-awesome-reveal';
import GoTo from '../Utils/GoTo'

const Home = () => {

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
                                I am a passionate software engineer and creative problem solver
                                dedicated to crafting engaging digital experiences. From web development to
                                UI/UX design and mobile development, I've honed my skills through hands-on
                                projects and a relentless drive to grow.
                            </p>
                        </Fade>
                        <Fade bottom duration={1000} delay={600}>
                            <div className='hero-badge'>
                                <span className='hero-badge-dot'></span>
                                Fullstack Developer
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
