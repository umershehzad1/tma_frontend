"use client"

import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Form,InputGroup } from 'react-bootstrap'
import { FiEye } from 'react-icons/fi'
import { BsGoogle } from "react-icons/bs";

const page = () => {
  return (
    <Container style={{paddingBottom:"60px", }}>

    <Row>
        <Col lg = {5} className='mx-auto  px-auto' style={{}}>
            
        <Card style={{ width: '40rem',boxShadow:"0px 0px 56px 0px #00260314",backgroundColor:"#FFFFFF", }} className='border-rounded'>      
    <Card.Body>
    <Card.Title className='text-center'>
        <h1>Create Account</h1>
    </Card.Title>
    <Form>
        
  <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlInput1">
    <Form.Control type="text" placeholder="Name"  className='p-3'/>
  </Form.Group>
  
  <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlInput1">
    <Form.Control type="email" placeholder="Email"  className='p-3'/>
  </Form.Group>
  <InputGroup className="mb-3">
    <Form.Control
    type='password'
      placeholder="password"
      aria-label="Password"
      aria-describedby="basic-addon1"
      className='p-3'
      style={{borderRight:"none"}}
      
    />
    <InputGroup.Text id="basic-addon1" style={{backgroundColor:"transparent",borderLeft:"none",fontSize:"20px"}}><FiEye/></InputGroup.Text>

  </InputGroup>
  <InputGroup className="mb-3">
    <Form.Control
    type='password'
      placeholder="Confirm password"
      aria-label="password"
      aria-describedby="basic-addon1"
      className='p-3'
      style={{borderRight:"none"}}
      
    />
    <InputGroup.Text id="basic-addon1" style={{backgroundColor:"transparent",borderLeft:"none",fontSize:"20px"}}><FiEye/></InputGroup.Text>

  </InputGroup>


  <Form.Check.Input style={{padding:"10px",border:"2px solid gray"}}  />
    <Form.Check.Label style={{textAlign:"center",paddingLeft:"5px",paddingTop:"3px",color:"#666666"}}>Accept all terms & Conditions</Form.Check.Label>


    <button style={{width:"100%",padding:"15px",borderRadius:"5px",border:"none",backgroundColor:"#00283D",color:"#FFFFFF",fontSize:"14px",fontWeight:"bold"}} className='mt-3'>Create Account</button>
  <button className='mt-3' style={{width:"100%",padding:"15px",borderRadius:"5px",border:"none",backgroundColor:"#00283D",color:"#FFFFFF",fontSize:"14px",fontWeight:"bold"}}>Sign Up with <BsGoogle/> </button>

    <div className='d-flex justify-content-center mt-4'>
        <p style={{color:"#666666",fontSize:"14px"}}>Already have account</p>
        <p style={{color:"#1A1A1A", fontSize:"14px",paddingLeft:"5px"}}>Login</p>

    </div>
   
   
    </Form>
   
  </Card.Body>
</Card>
            

        </Col>
    </Row>


</Container>
  )
}

export default page