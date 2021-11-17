import React,{useEffect, useState} from 'react';

const Namirnica = () =>{

    const [namirnice, setNamirnice] = useState([]);


    const handleClick = () =>{
        setNamirnice(['mlijeko','kruh','vino','ulje'])
    }

    const addNamirnicu = () =>{
        let stareNamirnice = [...namirnice];
        stareNamirnice.push("pivo");
        setNamirnice(stareNamirnice);
    }

    return(
        <>
            <button onClick={handleClick}>Postavi namirnice</button>
            <ul>
            {namirnice.length !== 0  ? 
                namirnice.map((namirnica) => {return <li>{namirnica}</li>})     
                : 
                <li>Nema namirnica</li>}
            </ul>
            <button onClick={() => addNamirnicu()}>Dodaj namirnice</button>
        </>
    )
}

export default Namirnica;