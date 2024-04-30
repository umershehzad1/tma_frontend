"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Card, Col, Row } from "react-bootstrap";
import group from "@/assets/Group.png";
import user from '@/assets/user.svg';


const AccountSetting = () => {
  return (
    <>
    
    <Card className="my-3">
    <div className="account">  <h1 style={{ color: "#1A1A1A", fontWeight: "500", fontSize: "20px" , margin:'1.5rem' }}>
            Account Settings
          </h1></div>
        <div className="m-3">
             <Row>
    
    <Col xs={12} lg={7}>
    <Form className="bill-form py-3">
    
      
      
        
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="label-head">First name</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Dianne"
            />
          </Form.Group>
       
        
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label >Last name</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Russell"
            />
          </Form.Group>
       
       
      


        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control size="lg" type="email" placeholder="dianne.russell@gmail.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control size="lg" type="type" placeholder="(603) 555-0123" />
        </Form.Group>
    
     

  
        <Button className="add-to-cart-button border-0 mt-2">
          Save Changes
        </Button>
      
  
  </Form>
    </Col>
    <Col xs={12} lg={5}>
    <Image
                src={user}
                width={224}
                height={224}
                sizes="100vw"
                alt="team"
                className='mx-5 mt-5'
              />
              <div className="chose"><Button className="chose-image-button mt-2">
          Chose Image
        </Button></div>
               

    </Col>
</Row>
</div>
   
    </Card>
    
    </>
  )
}

export default AccountSetting
