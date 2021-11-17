import {BrowserRouter, Route, Switch } from 'react-router-dom';
import React,{ useEffect, useState } from 'react';
import { Input, Space, message, Button, notification } from 'antd';
import "bootstrap/dist/css/bootstrap.css";

import logo from './logo.svg';
import './App.css';
import { FormComponent } from './Components/FormComponent';
import { Table } from 'antd';
import Tablica from './Components/Tablica';
//import axios from 'axios';
import axiosInstance from './api/utils/axiosInstance';


const INITIAL_STATE = {
  studentFirstName: "",
  studentLastName: "",
  studentEmail:"",
  studentId:0,
}
function App() {

  const [student, setStudent] = useState(INITIAL_STATE);  // ili {firstName:"", lastName:""}
  const [tableValues, setTableValues] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  //MODAL STATES
  const [current, setCurrent] = useState(INITIAL_STATE);

  const columns=[
    {
      title:"First Name",
      dataIndex: "studentFirstName",
      key: "firstName",
    },
    {
      title:"Last Name",
      dataIndex: "studentLastName",
      key: "lastName",
    },
    {
      title:"E-mail",
      dataIndex: "studentEmail",
      key: "email",
    },
    {
      title:"Action",
      key:"action",
      render:(element)=>{
        return(
        <>
          <Button onClick={() => handleDelete(element.studentId)}>Delete</Button>
          <Button onClick={() => enableUpdate(element)}>Update</Button>
        </>
        )
      }
    }
  ]

  const handleDelete = (studentId) => {
    axiosInstance.delete( "/student/" + studentId)
    .then(res => {
      notification.success({
        message:res.data
      })
    })
    const temp = tableValues.filter((student) => student.studentId !== studentId);
    setTableValues(temp);
  }

  const enableUpdate = (student) =>{
    setIsUpdate(true);
    setModalVisible(true);
    setStudent(student);
  }

  const onValueChange = ({target})=>{
    console.log(target.name)
    console.log(target.value)
    setStudent({...student, [target.name]: target.value});
  }

  const onSubmit = () =>{
    console.log(isUpdate);
    if(student.studentFirstName || student.studentLastName || student.studentEmail ){
      const valueCopy = {...student, studentId: tableValues.length + 1};
      if(isUpdate){
          axiosInstance.put("student/" + student.studentId, student)
          .then(res =>{
              notification.success({
                message:res.data
              });
          });

          const updates = [...tableValues].map((updatedStudent)=>{
            if(student.studentId === updatedStudent.studentId){
              return{...student}
            }else{
              return updatedStudent;
            }
          });
          setTableValues(updates);
          //ALETERNATIVE - shorter sintax
          // setTableValues([...tableValues.map((element) =>{
          //   return element.studentId === student.studentId ? {...student} : element;
          // })])

      }else{
        axiosInstance.post("student/", student)
          .then((res)=>{
            notification.success({
              message: res.data
            })
          })
          setTableValues([...tableValues, valueCopy]);
      }
      setStudent(INITIAL_STATE);
      setIsUpdate(false);
    }else{
      message.info("Sva polja su obvezna!")
      //setIsUpdate(false);
    }
  }

  const getData = () => {
      axiosInstance.get("student/")
      .then((response)=>{
        setTableValues(response.data);
      }).catch((error)=>{
        console.log(error.message)
      });
      setStudent(INITIAL_STATE);
  }

 
  return (
    <>
      <Button type="primary" onClick={getData}>Fetch data</Button>
      <FormComponent student={student} onValueChange={onValueChange} onSubmit={onSubmit}/>
      <Table columns={columns} dataSource={tableValues}/>
      <Tablica columns={columns} dataSource={tableValues} handleDelete={handleDelete} enableUpdate={enableUpdate}/>
    </>
  );
}

export default App;
