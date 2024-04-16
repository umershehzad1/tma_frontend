import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Checkout from "./Checkout";
import Shiping from "./Shiping";
import OrderSummary from "./OrderSummary";

const page = () => {
  return (
    <>
      <Container>
        <Row className="my-3">
          <Col xs={12} lg={8}>
            <Checkout />
            <Shiping />
          </Col>
          <Col xs={12} lg={4}>
            <OrderSummary/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default page;
