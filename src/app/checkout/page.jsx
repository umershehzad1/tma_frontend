import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import ShoppingCart from './ShoppingCart';
import CartTotal from './CartTotal';

const page = () => {
  return (
    <>
    <Container>
        <Row>
            <Col xs={12} lg={8}>
                <ShoppingCart/>
            </Col>
            <Col xs={12} lg={4}>
                <CartTotal/>
            </Col>
        </Row>
        

    </Container>
    
    
    </>
  )
}

export default page
