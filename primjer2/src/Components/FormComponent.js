import React, {useState} from 'react';
import {Input, Space, Card, Row, Col, Button} from 'antd';

export const FormComponent = ({student, onValueChange, onSubmit}) => {

    return(
        <>
        <Card>
            <Space direction="vertical">
                <Input placeholder="First name" name="studentFirstName" value={student.studentFirstName} onChange={onValueChange}/>
                <Input placeholder="Last name" value={student.studentLastName} name="studentLastName" onChange={onValueChange} />
                <Input placeholder="E-mail" name="studentEmail" value={student.studentEmail} onChange={onValueChange} />

                <Button type="primary" onClick={onSubmit}>Submit</Button>

            </Space>
        </Card>
      </>
    )
}

