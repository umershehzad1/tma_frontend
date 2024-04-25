"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Card, Col, Row } from "react-bootstrap";
import { InputGroup } from 'react-bootstrap'
import { FiEye } from 'react-icons/fi'

const ChangePassword = () => {
  return (
   <>
   <Card className="my-3">
    <div className="account">  <h1 style={{ color: "#1A1A1A", fontWeight: "500", fontSize: "20px" , margin:'1.5rem' }}>
            Change Password
          </h1></div>
        <div className="m-3">
             
    <Form className="bill-form py-3">
    
    <Form.Label>Current Password</Form.Label> 
    <InputGroup className="mb-3">
    <Form.Control
    type='password'
      placeholder="Password"
      aria-label="password"
      aria-describedby="basic-addon1"
      className='p-3'
      style={{borderRight:"none"}}
      
    />
    <InputGroup.Text id="basic-addon1" style={{backgroundColor:"transparent",borderLeft:"none",fontSize:"20px"}}><FiEye/></InputGroup.Text>

  </InputGroup>

  <Row>
    <Col xs={12} lg={6}>
    <Form.Label>New Password</Form.Label> 
    <InputGroup className="mb-3">
    <Form.Control
    type='password'
      placeholder="Password"
      aria-label="password"
      aria-describedby="basic-addon1"
      className='p-3'
      style={{borderRight:"none"}}
      
    />
    <InputGroup.Text id="basic-addon1" style={{backgroundColor:"transparent",borderLeft:"none",fontSize:"20px"}}><FiEye/></InputGroup.Text>

  </InputGroup>

    </Col>
    <Col xs={12} lg={6}>
    <Form.Label>Confirm Password</Form.Label> 
    <InputGroup className="mb-3">
    <Form.Control
    type='password'
      placeholder="Password"
      aria-label="password"
      aria-describedby="basic-addon1"
      className='p-3'
      style={{borderRight:"none"}}
      
    />
    <InputGroup.Text id="basic-addon1" style={{backgroundColor:"transparent",borderLeft:"none",fontSize:"20px"}}><FiEye/></InputGroup.Text>

  </InputGroup>
        
        </Col>
  </Row>
        
          
       
        
   
         

     
          
       
       
      


        
    
     

  
        <Button className="add-to-cart-button border-0 mt-2">
          Save Changes
        </Button>
      
  
  </Form>
    
    

</div>
   
    </Card>
   </>
  )
}

export default ChangePassword
