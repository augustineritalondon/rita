import React from 'react'
import lucenthub from '../../assets/images/lucenthub.png'
import dimkpamotors from '../../assets/images/dimkpamotors.png'
import portfolio from '../../assets/images/portfolio.png'
import a4dabul from '../../assets/images/Screenshot (162).png'

const Ui = () => {
    return (
        <>
            <section className='react'>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-12 '>
                        <div className='projects-card'>
                            <a href='https://www.figma.com/file/IVEzcD1GjS4ai7yaw6Fgzt/lucenthub' target='_blank' rel='noreferrer'><img src={lucenthub} alt="Lucent Hub Design" /></a>
                            <div className='description'>
                                <h5 className='title'>Lucent Hub</h5>
                                <p>Website Design for an Online Crypto Wallet.</p>
                                <button><a href='https://www.figma.com/file/IVEzcD1GjS4ai7yaw6Fgzt/lucenthub' target='_blank' rel='noreferrer'>View</a></button>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4 col-12 '>
                        <div className='projects-card'>
                            <a href='https://www.figma.com/file/YDDFpEmHNmD5JDeuJqOeXl/Dimkpa-Motors' target='_blank' rel='noreferrer'><img src={dimkpamotors} alt="Dimkpa Motors Design" /></a>
                            <div className='description'>
                                <h5 className='title'>Dimkpa Motors</h5>
                                <p>Website Design for an automobile organization.</p>
                                <button><a href='https://www.figma.com/file/YDDFpEmHNmD5JDeuJqOeXl/Dimkpa-Motors' target='_blank' rel='noreferrer'>View</a></button>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4 col-12 '>
                        <div className='projects-card'>
                            <a href='https://www.figma.com/file/J2uW5YGZg4zbSV5Ex0mfbi/Ritas-Portfolio' target='_blank' rel='noreferrer'><img src={portfolio} alt="Portfolio Design" /></a>
                            <div className='description'>
                                <h5 className='title'>Portfolio</h5>
                                <p>Website Design for my personal portfolio.</p>
                                <button><a href='https://www.figma.com/file/J2uW5YGZg4zbSV5Ex0mfbi/Ritas-Portfolio' target='_blank' rel='noreferrer'>View</a></button>
                                
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-4 col-12 '>
                        <div className='projects-card'>
                            <a href='https://www.figma.com/file/nHEtKwvI3uHjU6i7rdjCe5/Affordable?node-id=306%3A142' target='_blank' rel='noreferrer'><img src={a4dabul} alt="A4dabul Design" /></a>
                            <div className='description'>
                                <h5 className='title'>A4dabul</h5>
                                <p>Website Design for Skin care and beauty spa.</p>
                                <button><a href='https://www.figma.com/file/nHEtKwvI3uHjU6i7rdjCe5/Affordable?node-id=306%3A142' target='_blank' rel='noreferrer'>View</a></button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>


    )
}

export default Ui
