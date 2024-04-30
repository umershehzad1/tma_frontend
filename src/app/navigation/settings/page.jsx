"use client";
import React from "react";
import {Container, Col, Row } from "react-bootstrap";
import AccountSetting from "./AccountSetting";
import BillingAddress from "./BillingAddress";
import ShippingAddress from "./ShippingAddress";
import ChangePassword from "./ChangePassword";



const Settings = () => {
  return (
    <>
    <Container>
        <Row>
        <Col xs={12} lg={3}>
        {/* <Navigation/>  */}
            </Col>
            
            <Col xs={12} lg={9}>
                <AccountSetting/>
                <BillingAddress/>
                <ShippingAddress/>
                <ChangePassword/>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Settings
