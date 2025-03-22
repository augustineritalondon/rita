import React from 'react'
import './Services.css'
import GoTo from '../Utils/GoTo'
import { Zoom, Fade } from 'react-awesome-reveal';

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
                            <div className='services-card'>
                                <i class="fas fa-laptop-code"></i>
                                <Fade bottom>
                                    <h4>Web Development(Frontend)</h4>
                                    <p>Development of the graphical user interface of a website to ensure that the website visitors can easily interact with the page.</p>
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
        </>
    )
}

export default Services
