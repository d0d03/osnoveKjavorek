import {BrowserRouter, Route, Switch } from 'react-router-dom';
import React,{ useEffect, useState } from 'react';
import { Input, Space, message, Button, notification } from 'antd';
import "bootstrap/dist/css/bootstrap.css";

import logo from './logo.svg';
import './App.css';
import { FormComponent } from './FormComponent';
import { Table } from 'antd';
import Tablica from './Tablica';
import axios from 'axios';


const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email:"",
}

function App() {

  const [student, setStudent] = useState(INITIAL_STATE);  // ili {firstName:"", lastName:""}
  const [tableValues, setTableValues] = useState([]);
  const columns=[
    {
      title:"First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title:"Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title:"E-mail",
      dataIndex: "email",
      key: "email",
    },
    {
      title:"Action",
      key:"action",
      render:(element)=>{
      }
    }
  ]

  const onValueChange = ({target})=>{
    console.log(target.name)
    console.log(target.value)
    setStudent({...student, [target.name]: target.value});
    axios.post("http://kjavorek:8090/student", student)
    .then((res)=>{
      notification.success({
        message: res.data
      })
    })
  }

  const onSubmit = () =>{
    if(student.firstName || student.lastName || student.email ){
      const valueCopy = {...student, studentId: tableValues.length++};
      setTableValues([...tableValues, valueCopy]);
      setStudent(INITIAL_STATE);
    }else{
      message.info("Sva polja su obvezna!")
    }
  }

  const getData = () => {
      axios.get("http://kjavorek:8090/student")
      .then((response)=>{
        setTableValues(response.data);
      }).catch((error)=>{
        console.log(error.message)
      })
  }

 
  return (
    <>
      <Button type="primary" onClick={getData}>Fetch data</Button>
      <FormComponent student={student} onValueChange={onValueChange} onSubmit={onSubmit}/>
      <Table columns={columns} dataSource={tableValues}/>
      <Tablica columns={columns} dataSource={tableValues}/>
    </>
  );
}

export default App;
