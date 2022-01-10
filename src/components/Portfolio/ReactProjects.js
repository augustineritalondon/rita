import React, { useState } from 'react'
import harvoxxschool from '../../assets/images/harvoxxschool.png'
import rita from '../../assets/images/ritap.png'
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
                                <h5 className='title'>Harvoxx School</h5>
                                <p>A training registration website</p>
                                <button><a href='https://school.hthub.com.ng' target='_blank'>View</a></button>
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
                </div>
            </section>

        </>
    )
}

export default ReactProjects
