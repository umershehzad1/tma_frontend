"use client";
import React from "react";
import {Container, Col, Row } from "react-bootstrap";
import AccountSetting from "@/components/accountsetting/AccountSetting";
import BillingAddress from "@/components/billingaddress/BillingAddress";
import ShippingAddress from "@/components/shippingaddress/ShippingAddress";
import ChangePassword from "@/components/changepassword/ChangePassword";
import Navigation from "../page";
import "./settings.css"




const Settings = () => {
  return (
    <>
    <Container>
        <Row>
        <Col xs={12} lg={3} className="mt-3">
        <Navigation/> 
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
