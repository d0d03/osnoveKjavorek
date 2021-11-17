import React from 'react';
import {Table} from 'react-bootstrap';

const Tablica = ({columns, dataSource}) =>{
    return(
        <>
            <table>
                <thead>
                <tr>
                    {columns.map((column) => {
                        return <th>{column.title}</th>
                    })}
                </tr>
                </thead>
                <tbody>
                    
                        {dataSource ? dataSource.map((item)=>{
                            if(item){
                                console.log(item.firstName);
                                return(
                                    <tr>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.email}</td>
                                    </tr>)
                            }
                        }) : console.log("nista")}
                    
                </tbody>
            </table>
        </>
    )
}

export default Tablica