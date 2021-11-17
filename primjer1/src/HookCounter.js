import React, {useState} from 'react';

const HookCounter = () => {

    const [count, setCount] = useState(0);


    const handleClick= () =>{
        setCount(count + 1);
    }

    const handleReduce = () =>{
        setCount(count - 1);
    }
    const handleReset = () =>{
        setCount(0);
    }

    return(
        <>
            <p>{count}</p>
            <button onClick={handleClick}>+</button>
            <button onClick={handleReduce}>-</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default HookCounter;