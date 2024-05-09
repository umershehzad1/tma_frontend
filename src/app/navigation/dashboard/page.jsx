"use client";
import Image from "next/image";
import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import OrderHistory from "@/components/orderhistory/OrderHistory";

import UserDetail from "@/components/userdetail/UserDetail";
import Navigation from "../page";
import OrderHistoryMobilePage from "@/app/orderhistorymobile/page";

const Dashboard = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={3} xs={12}>
            <Navigation />
          </Col>
          <Col lg={9} xs={12}>
            <UserDetail />
            <OrderHistory />
            <OrderHistoryMobilePage/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
