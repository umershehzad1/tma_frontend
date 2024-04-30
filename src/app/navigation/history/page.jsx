"use client"
import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import OrderDetail from './OrderDetail';

const History = () => {
  return (
   <>
   <Container>
    <Row>
    <Col xs={12} lg={3}>
    <Navigation/>
        </Col>
        
        <Col xs={12} lg={9}>
            <OrderDetail/>
        </Col>
    </Row>
   </Container>
   </>
  )
}

export default History
