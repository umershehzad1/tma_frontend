import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import ShoppingCart from '@/components/checkout/shoppingcart/ShoppingCart';
import CartTotal from '@/components/checkout/carttotal/CartTotal';

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
