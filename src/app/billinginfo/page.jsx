import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Checkout from "@/components/billinginfo/checkout/Checkout";
import Shiping from "@/components/billinginfo/shipping/Shipping";
import OrderSummary from "@/components/billinginfo/ordersummary/OrderSummary";
import ShippingCheckout from "@/components/billinginfo/shippingcheckout/ShippingCheckout";


const page = () => {
  return (
    <>
      <Container>
        <Row className="my-3">
          <Col xs={12} lg={8}>
            <Checkout />
            <Shiping />
           <ShippingCheckout/>
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
