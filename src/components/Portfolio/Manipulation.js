import React,{useState} from 'react'
import Modal from './Modal'
import './Style.css'
import like from '../../assets/images/like.jpeg'
import butterfly from '../../assets/images/butterfly.jpeg'
import door from '../../assets/images/door.jpeg'
import tame from '../../assets/images/tame.jpeg'
import scene from '../../assets/images/scene.jpeg'


const Manipulation = () => {
    const images = [
        {
            image: `${scene}`
        },
        {
            image: `${like}`
        },
        {
            image: `${butterfly}`
        },
        {
            image: `${tame}`
        },
        {
            image: `${door}`
        },
    ]

    const [clickedimg, setClickedimg] = useState(null);
    const [currentindex, setCurrentindex] = useState(null)

    console.log(images)

    const handleClick = (item, index) => {
        setCurrentindex(index);
        setClickedimg(item.image)
    };

    const handleRotationRight =()=>{
        const totalLength = images.length
        if(currentindex +1 >= totalLength){
            setCurrentindex(0)
            const newUrl = images[0].image
            setClickedimg(newUrl)
            return
        }

        const newIndex = currentindex + 1;
        const newUrl = images.filter((item) =>{
            return images.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].image;
        setClickedimg(newItem);
        setCurrentindex(newIndex)
    }

    return (
        <>

            <section className='react'>
                <div className='row'>
                    {images.map((item, index) => {
                        return (
                            <div className='col-lg-4 col-md-4 col-12'>
                                <div className='projects-card wrapper'>
                                    <div key={index}>
                                        <img src={item.image} alt={`Gallery item ${index}`} onClick={() => handleClick(item, index)} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {clickedimg && <Modal 
                    clickedimg={clickedimg} 
                    handleRotationRight={handleRotationRight} 
                    setClickedimg={setClickedimg}
                />}
            </section>
            {/* <section className='graphics'>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-12 projects-card'>
                        <img src={card} />
                    </div>
                    <div className='col-lg-4 col-md-4 col-12 projects-card'>
                        <img src={flyer1} />
                    </div>
                    <div className='col-lg-4 col-md-4 col-12 projects-card'>
                        <img src={flyer2} />
                    </div>
                    <div className='col-lg-4 col-md-4 col-12 projects-card'>
                        <img src={agi} />
                    </div>
                </div>
            </section> */}


        </>
    )
}

export default Manipulation
