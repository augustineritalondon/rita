import React, { useRef } from 'react'
import './Contact.css'
// import BaseMap from '../Map'
import emailjs from '@emailjs/browser';
import GoTo from '../Utils/GoTo';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_epw9a5i', 'template_8wrfudx', form.current, 'user_QtrqioYRwPWtns39LyJkJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

    return (
        <>
            <GoTo />
            {/* <section className='contactPage'>
                <div className='r-container'>
                    <h4>Contact Information</h4>
                    <div className='row mt-5'>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <p>Adress: Port Harcourt, RS, Nigeria.</p>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <p>Phone: <span>+234 906 7598 578</span></p>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <p>Email: <span>augustineritalondon@gmail.com</span></p>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <p>Website: <span><a href='https://ritalondon.netlify.app/' style={{textDecoration: "none"}}>https://ritalondon.netlify.app/</a></span></p>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-lg-6 col-12'>
                            <form ref={form} onSubmit={sendEmail}>
                                <div>
                                    <input placeholder='Your Name' type="text" name="name" />
                                </div>
                                <div>
                                    <input placeholder='Your Email' type="text" name="email" />
                                </div>
                                <div>
                                    <input placeholder='Subject' type="text" name="subject" />
                                </div>
                                <div>
                                    <textarea placeholder='Your Name' rows="4" cols='50' name='message' />
                                </div>

                                <button type='submit' className='mb-5'>Send</button>
                            </form>
                        </div>
                        <div className='col-lg-6 col-12'>
                            <div>
                            </div>

                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Contact
