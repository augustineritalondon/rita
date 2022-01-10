import React from 'react'
import elon from '../../assets/images/elon.png'
import ruby from '../../assets/images/rubysplace.png'
import './Style.css'

const Angular = () => {
    return (
        <>
            <section className='react'>
                <div className='row'>                  
                    <div className='col-lg-4 col-md-4 col-12 '>
                        <div className='projects-card'>
                            <a href='http://rubysplace.herokuapp.com/'><img src={ruby} /></a>
                            <div className='description'>
                                <h5 className='title'>Ruby's Place</h5>
                                <p>Online Restaurant Template.</p>
                                <button><a href='https://school.hthub.com.ng'>View</a></button>
                            </div>
                        </div>
                    </div>


                    <div className='col-lg-4 col-md-4 col-12 '>
                        <div className='projects-card'>
                            <a href='#'><img src={elon} /></a>
                            <div className='description'>
                                <h5 className='title'>Elon_EMF</h5>
                                <p>Website haven't been published yet. The link will be made available when it is published.</p>
                                <button><a href='#' aria-disabled>View</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Angular
