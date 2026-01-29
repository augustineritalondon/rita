import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { ReactProjects, Angular, Ui, Graphics, Manipulation } from '../../components'
import GoTo from '../Utils/GoTo'
import './Port.css'
import WorkHistory from '../../components/Portfolio/WorkHistory'

const Port = () => {

    const [active, setActive] = useState("first")

    return (
        <>
            <GoTo />
            {/* <section className='port'>
                <div className='r-container'>
                    <div className='heading'>
                        <hr className='hr' />
                        <h5>Portfolio</h5>
                        <h2>Checkout a few of my works</h2>
                    </div>

                    <ul className='mb-5'>
                    <li onClick={() => setActive("first")}><Link to="" className={active === "first" ? 'active' : null}>React</Link></li>
                        <li onClick={() => setActive("second")}><Link to="" className={active === "second" ? 'active' : null}>Angular</Link></li>
                        <li onClick={() => setActive("third")}><Link to="" className={active === "third" ? 'active' : null}>Ui/Ux Design</Link></li>
                        <li onClick={() => setActive("fourth")}><Link to="" className={active === "fourth" ? 'active' : null}>Graphics</Link></li>
                        <li onClick={() => setActive("fifth")}><Link to="" className={active === "fifth" ? 'active' : null}>Photo Manipulation</Link></li>
                    </ul>

                    <div>
                        {active === "first" && <ReactProjects />}
                        {active === "second" && <Angular />}
                        {active === "third" && <Ui />}
                        {active === "fourth" && <Graphics />}
                        {active === "fifth" && <Manipulation />}
                    </div>
                </div>
            </section> */}
            <WorkHistory />
        </>
    )
}

export default Port
