import React from 'react'
import './Footer.css'
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
    return (
        <>
            <section className='contact'>
                <div className='r-container'>
                    <div className='contact_shape'></div>
                    <Fade bottom>
                        <div className='heading'>
                            <hr className='hr' />
                            <h5>Contact Me</h5>
                            <h2>Let's discuss for a project</h2>
                        </div>

                        <p className='mt-4'>
                            Do you have a project in mind and would love to bring it to live? Then contact me, let us work together to create something beautiful.
                        </p>

                        <div className='mt-5 contact-details'>
                            <p>Email: <a href="mailto: augustineritalondon@gmail.com">augustineritalondon@gmail.com</a></p>
                            <p>Phone: +234 906 7598 578</p>
                            <div className='icons' style={{ margin: 0, padding: 0 }}>
                                <ul className='mt-3'>
                                    <li><a href='https://web.facebook.com/augustinerita.london' target='_blank' rel='noreferrer'><i className="fab fa-facebook-f facebook"></i></a></li>
                                    <li><a href='https://twitter.com/rita_london' target='_blank' rel='noreferrer'><i className="fab fa-twitter twitter"></i></a></li>
                                    <li><a href='https://www.linkedin.com/in/rita-london-840361147/' target='_blank' rel='noreferrer'><i className="fab fa-linkedin-in linkedin"></i></a></li>
                                    <li><a href='https://github.com/augustineritalondon' target='_blank' rel='noreferrer'><i className="fab fa-github github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>

            <footer>
                <div className='r-container'>
                    <hr />
                    <p>Designed with <i class="fas fa-heart" style={{ color: "#808080" }}></i> by Rita London</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
