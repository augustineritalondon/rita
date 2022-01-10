import React, {useState} from 'react'

const Count = ({duration, amount}) => {

    const [count, setCount] = useState(0)

    const countUpdate = amout =>{
        if (count !== amount) {
            setTimeout(()=>{
                setCount(count + 1)
            },duration)
        }else{
            clearTimeout()
        }
    }

    return (
        <>
            <h2 onScroll={countUpdate(amount)}>
                {count}
            </h2>
        </>
    )
}

export default Count
