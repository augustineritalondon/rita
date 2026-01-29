import React from 'react'
import './Services.css'
import GoTo from '../Utils/GoTo'
import { Zoom, Fade } from 'react-awesome-reveal';
import webDevIcon from '../../assets/images/laptop.png'
import uiUxIcon from '../../assets/images/ui-ux.png'
import mobileDevIcon from '../../assets/images/mobile.png'

const Services = () => {
    return (
        <>
            <GoTo />
            <section className='services serv'>
                <div className='services_shape'></div>
                <div className='r-container'>
                    <div className='heading'>
                        <hr className='hr' />
                        <h5>What I Do</h5>
                        <h2>My Services</h2>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-12'>
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
                        <div className='col-lg-4 col-md-4 col-12'>
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
                        <div className='col-lg-4 col-md-4 col-12'>
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
        </>
    )
}

export default Services
