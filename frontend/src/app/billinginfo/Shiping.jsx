"use client";
import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import {  Col, Row } from "react-bootstrap";

const Shiping = () => {
  return (
    <>
      <Form className="bill-form">
        <Col xs={12} lg={8}>
          <h1
            style={{
              color: "#1A1A1A",
              fontWeight: "500",
              fontSize: "24px",
              marginBottom: "2rem",
            }}
          >
            Shipping Information
          </h1>
          <Row>
            <Col xs={12} lg={6}>
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
            <Col xs={12} lg={6}>
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

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control size="lg" type="email" placeholder="Email" />
          </Form.Group>

          <Row>
            <Col xs={12} lg={6}>
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
            <Col xs={12} lg={6}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>States</Form.Label>
                <Form.Select size="lg" aria-label="Default select example">
                  <option>Selects</option>
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

          <Col xs={12} lg={8} className="mt-4">
            <Button className="add-to-cart-button border-0">
              Add Shipping Information
            </Button>
          </Col>
        </Col>
        <div className="mt-5">
          <h1
            style={{
              color: "#1A1A1A",
              fontWeight: "500",
              fontSize: "24px",
            }}
          >
            Additional Info
          </h1>
        </div>

        <Form.Group
          className="mb-3 mt-4"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Order Notes (Optional)</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Notes about your order, e.g. special notes for delivery"
            rows={3}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default Shiping;
