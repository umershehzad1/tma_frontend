"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FiEye } from "react-icons/fi";
import Card from "react-bootstrap/Card";
import { BsGoogle } from "react-icons/bs";
import Link from "next/link";
const page = () => {
  return (
    <Container style={{ paddingBottom: "60px" }}>
      <Row>
        <Col lg={5} className="mx-auto">
          <Card
            style={{
              width: "40rem",
              boxShadow: "0px 0px 56px 0px #00260314",
              backgroundColor: "#FFFFFF",
            }}
            className="border-rounded"
          >
            <Card.Body>
              <Card.Title className="text-center">
                <h1 className="mb-4" style={{ fontWeight: "bold" }}>
                  Sign In
                </h1>
              </Card.Title>
              <Form>
                <Form.Group
                  className="mb-3 "
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="p-3"
                  />
                </Form.Group>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="password"
                    aria-label="password"
                    aria-describedby="basic-addon1"
                    className="p-3"
                    style={{ borderRight: "none" }}
                  />
                  <InputGroup.Text
                    id="basic-addon1"
                    style={{
                      backgroundColor: "transparent",
                      borderLeft: "none",
                      fontSize: "20px",
                    }}
                  >
                    <FiEye />
                  </InputGroup.Text>
                </InputGroup>
                <Row>
                  <Col lg={6}>
                    <div>
                      <Form.Check.Input
                        style={{ padding: "10px", border: "2px solid gray" }}
                      />
                      <Form.Check.Label
                        style={{
                          textAlign: "center",
                          paddingLeft: "5px",
                          paddingTop: "3px",
                          color: "#666666",
                        }}
                      >
                        Remember me
                      </Form.Check.Label>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <p style={{ textAlign: "end", color: "#666666" }}>
                      Forgot Password
                    </p>
                  </Col>
                </Row>

                <button
                  style={{
                    width: "100%",
                    padding: "15px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#00283D",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </button>
                <button
                  className="mt-3"
                  style={{
                    width: "100%",
                    padding: "15px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#00283D",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  Sign Up with <BsGoogle />{" "}
                </button>

                <div className="d-flex justify-content-center mt-4">
                  <p style={{ color: "#666666", fontSize: "14px" }}>
                    Dont't have account?
                  </p>
                  <Link href={"/signup"} style={{ color: "#1A1A1A", fontSize: "14px" }}>Register</Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default page;
