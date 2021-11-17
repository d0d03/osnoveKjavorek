import React from 'react';

const TodayDate = ({minutes = (10),seconds,resetiraj, children}) =>{
    return(
        <>
       
        <br></br>
        {minutes} : {seconds}
        <button onClick={resetiraj}>Resetiraj</button>
        {children}
        </>
    )
}

export {TodayDate as default}