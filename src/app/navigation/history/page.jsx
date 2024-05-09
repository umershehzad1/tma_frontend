"use client"
import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import OrderDetail from '@/components/orderdetail/OrderDetail';
import Navigation from "../page";
import "./history.css"
import OrderHistoryMobilePage from '@/app/orderhistorymobile/page';

const History = () => {
  return (
   <>
   <Container>
    <Row>
    <Col xs={12} lg={3} className='mt-5'>
    <Navigation/>
        </Col>
        
        <Col xs={12} lg={9}>
            <OrderDetail/>
            <OrderHistoryMobilePage/>
        </Col>
    </Row>
   </Container>
   </>
  )
}

export default History
