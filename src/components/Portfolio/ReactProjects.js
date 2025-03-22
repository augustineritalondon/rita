import React, { useState } from 'react'
import harvoxxschool from '../../assets/images/100pay.png'
import rita from '../../assets/images/ritap.png'
import templatepic from '../../assets/images/template.png'
import egis from '../../assets/images/Screenshot (163).png'
import akawo from '../../assets/images/Screenshot (164).png'
import kashback from '../../assets/images/everest.png'
import nano from '../../assets/images/shop100template.png'
import './Style.css'

const ReactProjects = () => {

    // const data = [
    //     {
    //         title: "Harvoxx School",
    //         description: "Registration website for trainings.",
    //         button: "view",
    //     },
    // ]


    const [data, setData] = useState([
        {
            id: 1,
            title: "Harvoxx School",
            description: "Registration website for trainings.",
            button: "view",
        },
    ])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(6)

    const pages = [];
    for (let i = 1; i < Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i)
    }

    const renderPageNumber = pages.map(number => {
        return (
            <li key={number} id={number}>
                {number}
            </li>
        )
    })

    return (
        <>
            {renderPageNumber}
            <section className='react'>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-12 '>
                        <div className='projects-card'>
                            <a href='https://school.hthub.com.ng' target='_blank'><img src={harvoxxschool} /></a>
                            <div className='description'>
                                <h5 className='title'>100Pay Dashboard</h5>
                                <p>A platform for managing payments for 100Pay.</p>
                                <button><a href='https://dashboard.100pay.co/login' target='_blank'>View</a></button>
                            </div>
                        </div>
                    </div>


                    <div className='col-lg-4 col-md-4 col-12 '>
                        <div className='projects-card'>
                            <a href='http://ritalondon.herokuapp.com/' target='_blank'><img src={rita} /></a>
                            <div className='description'>
                                <h5 className='title'>Portfolio</h5>
                                <p>My personal portfolio</p>
                                <button><a href='http://ritalondon.herokuapp.com/' target='_blank'>View</a></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-12 '>
                        <div className='projects-card'>
                            <a href='https://kashback.netlify.app/' target='_blank'><img src={kashback} /></a>
                            <div className='description'>
                                <h5 className='title'>Everest Mobility</h5>
                                <p>An informative website for a mobile app.</p>
                                <button><a href='https://www.everestmobility.co/' target='_blank'>View</a></button>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4 col-12 '>
                        <div className='projects-card'>
                            <a href='https://templateschool.netlify.app/' target='_blank'><img src={templatepic} /></a>
                            <div className='description'>
                                <h5 className='title'>Website template</h5>
                                <p>A website template built using react</p>
                                <button><a href='https://templateschool.netlify.app/' target='_blank'>View</a></button>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4 col-12 '>
                        <div className='projects-card'>
                            <a href='https://kashback.netlify.app/' target='_blank'><img src={nano} /></a>
                            <div className='description'>
                                <h5 className='title'>Ecommerce Dashboard Template</h5>
                                <p>A dashboard template for an ecommerce website.</p>
                                <button><a href='https://feat-auth--shp100-v2.netlify.app/' target='_blank'>View</a></button>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4 col-12 '>
                        <div className='projects-card'>
                            <a href='https://egis-frontend-techfaithful.vercel.app/' target='_blank'><img src={egis} /></a>
                            <div className='description'>
                                <h5 className='title'>Egis website</h5>
                                <p>E-commerce website for Industrial machinery</p>
                                <button><a href='https://egis-frontend-techfaithful.vercel.app/' target='_blank'>View</a></button>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4 col-12 '>
                        <div className='projects-card'>
                            <a href='https://akawo.me/' target='_blank'><img src={akawo} /></a>
                            <div className='description'>
                                <h5 className='title'>Akawo.me</h5>
                                <p>Information website for a digitalized saving app.</p>
                                <button><a href='https://akawo.me/' target='_blank'>View</a></button>
                            </div>
                        </div>
                    </div>

                    {/* <div className='col-lg-4 col-md-4 col-12 '>
                        <div className='projects-card'>
                            <a href='https://kashback.netlify.app/' target='_blank'><img src={nano} /></a>
                            <div className='description'>
                                <h5 className='title'>Nano App Store</h5>
                                <p>An appstore for web applications.</p>
                                <button><a href='https://nanoapps.store/' target='_blank'>View</a></button>
                            </div>
                        </div>
                    </div> */}

                    

                    
                </div>
            </section>

        </>
    )
}

export default ReactProjects
