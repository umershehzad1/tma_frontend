
"use client";

import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'next/image';
import { Card, Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import ModalPurchase from './ModalPurchase'; // Import your modal component
import leaf1 from '@/assets/leaf-td.svg';
import Close from '@/assets/Close.svg';
import apple from '@/assets/apple.svg';

const products = [
  { id: 1, size: 'S', name: 'Chinese Cabbage', price: 'N17.28', image: leaf1 },
  { id: 2, size: 'M', name: 'Apple', price: 'N14.00', image: apple },
  // Add more products as needed
];

const ShoppingCart = () => {
  const [count, setCount] = useState(0);
  const incNum = () => {
    setCount(count + 1);
  };
  const decNum = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  return (
    <>
      <Card className='mt-3' style={{ minHeight: "296px" }}>
        <Table hover className='my-2'>
          <thead style={{ borderBottom: '1px solid #E6E6E6' }}>
            <tr>
              <th style={{ color: '#808080', fontWeight: '500', fontSize: '14px' }}>PRODUCT</th>
              <th style={{ color: '#808080', fontWeight: '500', fontSize: '14px' }}>SIZE</th>
              <th style={{ color: '#808080', fontWeight: '500', fontSize: '14px' }}>PRICE</th>
              <th style={{ color: '#808080', fontWeight: '500', fontSize: '14px' }}>QUANTITY</th>
              <th style={{ color: '#808080', fontWeight: '500', fontSize: '14px' }}>SUBTOTAL</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}  >
                <td >
                  <div className='d-flex ' style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
                    <div>
                      <Image src={product.image} width={60} height={60} sizes='100vw' alt='product' />
                    </div>
                    <div className='mt-4 ms-2'>
                      <h1 style={{ color: '#1A1A1A', fontWeight: '400', fontSize: '16px' }}>{product.name}</h1>
                    </div>
                  </div>
                </td>
                <td style={{ heigh: "40px", width: "43px" }}>
                  <div style={{ marginTop: "2.5rem", marginBottom: "2.5rem" }}> <h1 className=' size text-center ' style={{ color: '#1A1A1A', fontWeight: '400', fontSize: '16px', marginRight: '1rem' }}>
                    {product.size}
                  </h1></div>

                </td>
                <td>
                  <div style={{ marginTop: "2.8rem", marginBottom: "2.8rem" }}><h1 style={{ color: '#1A1A1A', fontWeight: '400', fontSize: '16px' }}>
                    {product.price}
                  </h1>
                  </div>
                </td>
                <td>
                  <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                    <Row >
                      <Col className="mt-3">
                        <div className="inc-dec text-center py-2">
                          <button type="button" className="btn-dec " onClick={decNum}>
                            -
                          </button>
                          <span>{count || 0}</span>
                          <button type="button" className="btn-inc" onClick={incNum}>
                            +
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </div>

                </td>
                <td>
                  <div style={{ marginTop: "2.8rem", marginBottom: "2.8rem" }}>
                    <h1 className='mt-4' style={{ color: '#1A1A1A', fontWeight: '400', fontSize: '16px' }}>
                      {product.price}
                    </h1></div>

                </td>
                <td>
                  <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                    <Button className='close-btn w-100 border-0 mt-4 p-0' >
                      <Image src={Close} width={24} height={24} alt='close' />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default ShoppingCart;

