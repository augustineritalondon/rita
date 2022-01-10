import React from 'react'

const Modal = ({clickedimg, handleRotationRight, setClickedimg}) => {

    const handleClick = (e) => {
        if(e.target.classList.contains("dismiss")){
            setClickedimg(null);
        }
    }

    return <>
        <div className='overlay dismiss' onClick={handleClick}>
            <img src={clickedimg} alt='bigger picture' />

            <span className='dismiss' onClick={handleClick}>X</span>

            <div onClick={handleRotationRight} className='overlay-arrow'>
                {/* <div>
                    <svg
                        xmlns="https://www.w3.org/2000/svg"
                        className='h-s w-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                    > 
                    <path 
                        fillRule="evenodd"
                        d='N9.707 16.707a1 1 0 01-1.414 0l-6-6a1 0 010-1.414l6-6a1 1 0 011.414 1.414L5 9H17al 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
                        clipRule='evenodd'
                    />
                    </svg>
                </div> */}
            </div>
        </div>
    </>
}

export default Modal
