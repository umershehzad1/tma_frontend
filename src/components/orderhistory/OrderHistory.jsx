"use client";

import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'next/image';
import { Card, Badge, Col, Row, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "./orderhistory.css"

const orders = [
  { id: 1, order: '#738', date: '8 Sep, 2020', total: '$135.00', status: 'Processing' },
  { id: 1, order: '#703', date: '24 May, 2020', total: '$25.00', status: 'on the way' },
  { id: 1, order: '#130', date: '22 Oct, 2020', total: '$250.00', status: 'Completed' },
  { id: 1, order: '#561', date: '1 Feb, 2020', total: '$35.00', status: 'Completed' },
  { id: 1, order: '#536', date: '21 Sep, 2020', total: '$578.00', status: 'Completed' },
  { id: 1, order: '#492', date: '22 Oct, 2020', total: '$345.00', status: 'Completed' },
];

const OrderHistory = () => {
  return (
    <>
    <Container className='d-none d-md-block'>
    <Card className='mt-5' >
        <Card.Body className='px-0'>
          <div className='orderhistory '>
            <div><h1 style={{ fontSize: "20px", fontWeight: "500", color: '#1A1A1A', paddingLeft: '1.5rem' }}>Order History</h1></div>
            <div><h1 style={{ fontSize: "16px", fontWeight: "500", color: '#1A1A1A', paddingRight: '1.5rem' }}>View All</h1></div>
          </div>
          <div className='shopping-table'>
            <Table hover style={{ border: 'none' }} className='my-4'>
              <thead style={{ borderBottom: '1px solid #E6E6E6' }}>
                <tr >
                  <th style={{ color: '#4D4D4D', fontWeight: '500', fontSize: '12px', backgroundColor: '#F2F2F2', paddingLeft: "1rem" }}>ORDER ID</th>
                  <th style={{ color: '#4D4D4D', fontWeight: '500', fontSize: '14px', backgroundColor: '#F2F2F2' }}>DATE</th>
                  <th style={{ color: '#4D4D4D', fontWeight: '500', fontSize: '14px', backgroundColor: '#F2F2F2' }}>TOTAL</th>
                  <th style={{ color: '#4D4D4D', fontWeight: '500', fontSize: '14px', backgroundColor: '#F2F2F2' }}>STATUS</th>
                  <th style={{ backgroundColor: '#F2F2F2', }} > </th>
                </tr>
              </thead>
              <tbody style={{ border: 'none' }}>
                {orders.map((order) => (
                  <tr key={order.id} className='border-0'>
                    <td className='border-0'>
                      <div className='d-flex'>

                        <div className='mt-4 ms-2'>
                          <h1 style={{ color: '#1A1A1A', fontWeight: '400', fontSize: '16px' }}>{order.order}</h1>
                        </div>
                      </div>
                    </td>
                    <td className='border-0'>
                      <h1 className='mt-4' style={{ color: '#1A1A1A', fontWeight: '400', fontSize: '16px' }}>
                        {order.date}
                      </h1>
                    </td>
                    <td className='border-0'>
                      <h1 className='mt-4' style={{ color: '#1A1A1A', fontWeight: '500', fontSize: '16px' }}>
                        {order.total} <span style={{ color: '#1A1A1A', fontWeight: '400', fontSize: '16px' }}>(5 products)</span>
                      </h1>
                    </td>
                    <td className='border-0'>
                      <h1 className='mt-4' style={{ color: '#1A1A1A', fontWeight: '400', fontSize: '16px' }}>
                        {order.status}
                      </h1>
                    </td>
                    <td className='border-0'>
                      <div className='view-btn '>
                        <p style={{ color: "#006BA3", fontWeight: '500', fontSize: "16px", marginTop: '1rem' }}>View</p>

                        <Button className="dash-button  border-0 text-center ms-4" >
                          Reorder
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>


        </Card.Body>
      </Card>
    </Container>
      
    </>
  )
}

export default OrderHistory
