import React from 'react'
import lucenthub from '../../assets/images/lucenthub.png'
import dimkpamotors from '../../assets/images/dimkpamotors.png'
import portfolio from '../../assets/images/portfolio.png'

const Ui = () => {
    return (
        <>
            <section className='react'>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-12 '>
                        <div className='projects-card'>
                            <a href='https://www.figma.com/file/IVEzcD1GjS4ai7yaw6Fgzt/lucenthub'><img src={lucenthub} /></a>
                            <div className='description'>
                                <h5 className='title'>Lucent Hub</h5>
                                <p>Website Design for an Online Crypto Wallet.</p>
                                <button><a href='https://www.figma.com/file/IVEzcD1GjS4ai7yaw6Fgzt/lucenthub'>View</a></button>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4 col-12 '>
                        <div className='projects-card'>
                            <a href='https://www.figma.com/file/YDDFpEmHNmD5JDeuJqOeXl/Dimkpa-Motors'><img src={dimkpamotors} /></a>
                            <div className='description'>
                                <h5 className='title'>Dimkpa Motors</h5>
                                <p>Website Design for an automobile organization.</p>
                                <button><a href='https://www.figma.com/file/YDDFpEmHNmD5JDeuJqOeXl/Dimkpa-Motors'>View</a></button>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4 col-12 '>
                        <div className='projects-card'>
                            <a href='https://www.figma.com/file/J2uW5YGZg4zbSV5Ex0mfbi/Ritas-Portfolio'><img src={portfolio} /></a>
                            <div className='description'>
                                <h5 className='title'>Portfolio</h5>
                                <p>Website Design for my personal portfolio.</p>
                                <button><a href='https://www.figma.com/file/J2uW5YGZg4zbSV5Ex0mfbi/Ritas-Portfolio'>View</a></button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>


    )
}

export default Ui
