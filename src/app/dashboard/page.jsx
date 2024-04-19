"use client";
import Image from "next/image";
import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import OrderHistory from "./OrderHistory";
import UserDetail from "./UserDetail";

const page = () => {
  return (
  <>
  <Container>
    <Row>
        <Col lg={3} xs={12}>

        </Col>
        <Col lg={9} xs={12}>
          <UserDetail/>
          <OrderHistory/>
        </Col>
    </Row>
  </Container>
  </>
  )
}

export default page
