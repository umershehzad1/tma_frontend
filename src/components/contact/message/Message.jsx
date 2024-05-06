"use client";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card, Col, Row } from "react-bootstrap";
import "./message.css"
const Message = () => {
  return (
    <>
      <Row>
        <Col xs={12} lg={3} className="mt-3">
          <h1 style={{ color: "#1A1A1A", fontWeight: "600", fontSize: "48px" }}> Get in Touch</h1>
          <p style={{ color: "#666666", fontWeight: "400", fontSize: "14px", lineHeight: "21px", marginTop: "1.5rem" }}>Submit a request to our customer service team and we’ll get back to you as soon as possible. <br />Before contacting us, please check out
            the FAQ section on our website.</p>
        </Col>
        <Col xs={12} lg={9}>
          <Card className="my-3 contact border-0" >
            <div className="m-3">
              <h1 style={{ color: "#1A1A1A", fontWeight: "600", fontSize: "24px" }}>Just Say Hello!</h1>
              <p style={{ color: "#808080", fontWeight: "400", fontSize: "14px" }}>Do you fancy saying hi to me or you want to get started with your<br /> project and you need my help? Feel free to contact me.</p>
              <Form className="bill-form py-3">
                <Row>
                  <Col xs={12} lg={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} lg={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Email"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    size="lg"
                    type="text"
                    placeholder="Hello"

                  />
                </Form.Group>
                <Form.Group className="mb-3"
                  controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={3}
                    placeholder="Message" />
                </Form.Group>
                <Button className="add-to-cart-button border-0 mt-2">
                  Submit
                </Button>
              </Form>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Message
