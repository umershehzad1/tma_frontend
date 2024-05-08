"use client"
import Link from 'next/link';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsArrowRight } from "react-icons/bs";
import "./Banner.css"
const page = () => {

    return (
        <Container className='d-none d-md-block'>
            <div className='background'>
                <Container style={{ paddingBottom: "50px" }}>
                    <Row>
                        <Col lg={5} className='ms-auto'>
                            <p style={{ color: "#FFFFFF", fontSize: "14px", }} className='mt-5'>
                                SUMMER SALE
                            </p>
                            <span style={{ color: "#FF8A00", fontSize: "56px" }}>37%</span> <span style={{ color: "#ffffff", fontSize: "56px" }}>OFF</span>
                            <p style={{ color: "#ffffff" }}>Free on all your order, Free Shipping and  30 day <br />money-back guarantee</p>
                            <Link href='/vegetable'>
                            <Col lg={4}>
                                <button className='mt-3 ' style={{ color: "#00283D", fontSize: "16px", width: "100%", borderRadius: "5px", padding: "10px" }}>Shop Now <BsArrowRight /></button>
                            </Col>
                            </Link>
                           
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>

    )
}

export default page