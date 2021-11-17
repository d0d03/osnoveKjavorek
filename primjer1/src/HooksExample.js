import React, {useState} from 'react';

const HooksExample = () =>{


    const [zadatakDana, setZadatakDana] = useState('Learn hooks');
    

    const handleClick = () =>{
        setZadatakDana('Done');
    }

    return(
        <>
            <h3>{zadatakDana}</h3>
            <button onClick={handleClick}>Done</button>
        </>
    );
}

export default HooksExample;