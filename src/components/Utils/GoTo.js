import React, {useEffect, useState} from 'react'
import {useWindowScroll} from 'react-use'
import './Style.css'

const GoTo = () => {

    const { y: pageYOffset } = useWindowScroll();

    const [visible, setVisibility] = useState(false);

    useEffect(()=>{
        if(pageYOffset > 400){
            setVisibility(true);
        }else{
            setVisibility(false)
        }
    }, [pageYOffset])

    const scrollToTop = () => window.scrollTo({top: 0, behavior: "smooth"})

    if(!visible){
        return false
    }

    // const handleVisibleButton = () => {
    //     const position = window.pageYOffset;
    //     setSrollPosition(position);

    //     if (scrollPosition > 50) {
    //         return setshowGoTop("goTop");
    //     } else if (scrollPosition < 50) {
    //         return setshowGoTop("goTopHidden");
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", handleVisibleButton);
    // });

    return (
        <>
            <div className='scroll-to-top cursor-pointer text-center' onClick={scrollToTop}>
                <i className='icon fas fa-chevron-up'></i>
            </div>
        </>
    )
}

export default GoTo
