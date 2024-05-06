"use client";

import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'next/image';
import {  Card, Badge, Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import user from '@/assets/user.svg';
import "./userdetail.css"

const UserDetail = () => {
  return (
    <>
 <Card className=''>
      
      <Card.Body>
        
      <Row>
        <Col lg={4} className='text-center'>
        <Image
                src={user}
                width={174}
                height={174}
                sizes="100vw"
                alt="team"
                className='mx-5 my-5'
              />
        </Col>
        <Col lg={8}>
            <div><p style={{ color: "#999999", fontWeight: "500", fontSize: "14px" }}>BILLING ADDRESS</p></div>
            <div><p style={{ color: "#1A1A1A", fontWeight: "500", fontSize: "18px" }}>Dainne Russell</p></div>
            <div><p style={{ color: "#999999", fontWeight: "400", fontSize: "14px" }}>4140 Parker Rd. Allentown, New Mexico 31134</p></div>
            <div className='mt-5'><p style={{ color: "#1A1A1A", fontWeight: "400", fontSize: "16px" }}>dainne.ressell@gmail.com</p></div>
            <div><p style={{ color: "#1A1A1A", fontWeight: "400", fontSize: "16px" }}>(671) 555-0110</p></div>
            <div> <p style={{color:"#006BA3", fontWeight:'500', fontSize:"16px", marginTop:'1rem'}}>Edit</p></div>
            
        </Col>
    </Row>
      </Card.Body>
    </Card>
   
    </>
  )
}

export default UserDetail
