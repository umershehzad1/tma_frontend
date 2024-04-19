import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductImage from "./ProductImages";
import ProductDetail from "./ProductDetail";
const page = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} lg={6} className="order-sm-0 order-1">
            <ProductImage />
          </Col>
          <Col xs={12} lg={6} className="order-sm-1 order-0">
            <ProductDetail />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default page;
