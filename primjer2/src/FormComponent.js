import React, {useState} from 'react';
import {Input, Space, Card, Row, Col, Button} from 'antd';

export const FormComponent = ({student, onValueChange, onSubmit}) => {

    return(
        <>
        <Card>
            <Space direction="vertical">
                <Input placeholder="First name" name="firstName" value={student.firstName} onChange={onValueChange}/>
                <Input placeholder="Last name" value={student.lastName} name="lastName" onChange={onValueChange} />
                <Input placeholder="E-mail" name="email" value={student.email} onChange={onValueChange} />

                <Button type="primary" onClick={onSubmit}>Submit</Button>

            </Space>
        </Card>
      </>
    )
}

