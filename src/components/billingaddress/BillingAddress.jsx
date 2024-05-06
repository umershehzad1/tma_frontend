"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Card, Col, Row } from "react-bootstrap";
import "./billingaddress.css"

const BillingAddress = () => {
  return (
    <>
    <Card className="my-3">
    <div className="account">  <h1 style={{ color: "#1A1A1A", fontWeight: "500", fontSize: "20px" , margin:'1.5rem' }}>
            Billing Address
          </h1></div>
        <div className="m-3">
             
    <Form className="bill-form py-3">
    
      
      <Row>
        <Col xs={12} lg={4}>
        <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>First name</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Dianne"
            />
          </Form.Group>

        </Col>
        <Col xs={12} lg={4}>
        <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Last name</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Dianne"
            />
          </Form.Group>

        </Col>
        <Col xs={12} lg={4}>
        <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Company Name <span style={{color:'#666666'}}>(Optional)</span></Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Dianne"
            />
          </Form.Group>

        </Col>
      </Row>
      <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label >Street Address</Form.Label>
            <Form.Control
              size="lg"
              type="text"
            
            />
          </Form.Group>
        
          
       
        
      <Row>
            <Col lg={6}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Country / Region</Form.Label>
                <Form.Select size="lg" aria-label="Default select example">
                  <option>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>States</Form.Label>
                <Form.Select size="lg" aria-label="Default select example">
                  <option>Selects</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={3}>
            <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="20033"
            />
          </Form.Group>
            </Col>
          </Row>

         

      <Row>
        
        <Col xs={12} lg={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control size="lg" type="email" placeholder="dianne.russell@gmail.com" />
        </Form.Group>

        </Col>
        <Col xs={12} lg={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control size="lg" type="type" placeholder="(603) 555-0123" />
        </Form.Group>

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

export default BillingAddress
