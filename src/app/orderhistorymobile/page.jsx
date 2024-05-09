"use client"
import React from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'next/image';
import { Card, Badge, Col, Row, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "./orderhistorymobile.css"
import ViewAllHeading from '@/components/viewallheading/ViewAllHeading';

const orders = [
  {
    status: "Processing",
    total: "N135.00",
    productsCount: 5,
    date: "4 April, 2024"
  },
  {
    status: "Processing",
    total: "N135.00",
    productsCount: 5,
    date: "4 April, 2024"
  },
  {
    status: "Processing",
    total: "N135.00",
    productsCount: 5,
    date: "4 April, 2024"
  },
];

const OrderHistoryMobilePage = () => {
  return (
    <Container className='d-block d-md-none'>
       <ViewAllHeading
          title="Order History"
          viewAllLink="/"
        />
      {orders.map((order, index) => (
        <Card key={index} className='border-0 my-2' style={{backgroundColor:"#F6F6F6"}}>
          <Card.Body>
            <p className='status'>Status: <span className="sp-detail">{order.status}</span></p>
            <div className='order-mobile'>
              <p className='status'>Total: <span className='sp-detail'>{`N${order.total}(${order.productsCount} Products)`}</span></p>
              <p>{order.date}</p>
            </div>
            <div className='order-mobile'>
              <p className='ms-5 order-view'>View</p>
              <Button className='add-to-cart-button'>Reorder</Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default OrderHistoryMobilePage;
