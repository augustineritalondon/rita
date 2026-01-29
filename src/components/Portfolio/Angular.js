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
                            <button className="link-button" onClick={() => window.open('http://rubysplace.herokuapp.com/', '_blank')}><img src={ruby} alt="Ruby's Place" /></button>
                            <div className='description'>
                                <h5 className='title'>Ruby's Place</h5>
                                <p>Online Restaurant Template.</p>
                                <button onClick={() => window.open('http://rubysplace.herokuapp.com/', '_blank')}>View</button>
                            </div>
                        </div>
                    </div>


                    <div className='col-lg-4 col-md-4 col-12 '>
                        <div className='projects-card'>
                            <div className="disabled-link"><img src={elon} alt="Elon_EMF" /></div>
                            <div className='description'>
                                <h5 className='title'>Elon_EMF</h5>
                                <p>Website haven't been published yet. The link will be made available when it is published.</p>
                                <button disabled>View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Angular



