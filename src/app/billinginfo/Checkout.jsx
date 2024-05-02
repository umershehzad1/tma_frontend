"use client";
import React from "react";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
const Checkout = () => {
  return (
    <>
      <Form className="bill-form py-3">
        <Col lg={8}>
          <h1 style={{ color: "#1A1A1A", fontWeight: "500", fontSize: "24px" }}>
            Billing Information
          </h1>
          <Row>
            <Col  lg={6}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>First name</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Your first name"
                />
              </Form.Group>
            </Col>
            <Col  lg={6}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Your last name"
                />
              </Form.Group>
            </Col>
          </Row>
          <Col  lg={12}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control size="lg" type="email" placeholder="Email" />
          </Form.Group>
          </Col>
         
          <Row>
            <Col  lg={6}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Country / Region</Form.Label>
                <Form.Select size="lg" aria-label="Default select example">
                  <option>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={6} lg={3}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>States</Form.Label>
                <Form.Select size="lg" aria-label="Default select example">
                  <option>CA</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={6} lg={3}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Zip Code</Form.Label>
                <Form.Select size="lg" aria-label="Default select example">
                  <option>00012</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Street Address</Form.Label>
            <Form.Control size="lg" type="email" placeholder="Address" />
          </Form.Group>
        </Col>
      </Form>
      <hr className="text-gray" />
    </>
  );
};

export default Checkout;
