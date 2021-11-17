import React from 'react';
const CarDetails = ({tekst, model, motor, marka, kilometraza, potrosnja, children,promjeni}) =>{
    
    return(
        <div>
            <h1>{tekst}</h1>
            {children}
            <p>{model}</p>
            <p>{motor}</p>
            <p>{marka}</p>
            <p>{potrosnja}</p>
            <p>{kilometraza}</p>

            <button onClick={promjeni}>Çhange me</button>
        </div>
    );
}

export default CarDetails;