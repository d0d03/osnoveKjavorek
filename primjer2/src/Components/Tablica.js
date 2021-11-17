import React from 'react';
import {Table} from 'react-bootstrap';

const Tablica = ({columns, dataSource, handleDelete, enableUpdate}) =>{

    return(
        <>
            <table>
                <thead>
                <tr>
                    {columns.map((column) => {
                        return <th key={column.key}>{column.title}</th>
                    })}
                </tr>
                </thead>
                <tbody>
                    
                        {dataSource ? dataSource.map((item)=>{
                            if(item){
                                return(
                                    <tr key={item.studentId}>
                                        <td>{item.studentFirstName}</td>
                                        <td>{item.studentLastName}</td>
                                        <td>{item.studentEmail}</td>
                                        <td><button onClick={()=>handleDelete(item.studentId)}>REMOVE</button></td>
                                        <td><button onClick={()=>enableUpdate(item.studentId)}>UPDATE</button></td>
                                    </tr>)
                            }
                        }) : console.log("nista")}
                    
                </tbody>
            </table>
        </>
    )
}

export default Tablica