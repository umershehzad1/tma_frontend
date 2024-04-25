"use client";
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import BG from "@/assets/BG.png";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";

const SubscribeModal = ({ show, handleClose }) => {
  return (
    <>
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal size='xl' show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          </Modal.Header >
          <Modal.Body >
            <Row>
              <Col xs={12} lg={5}>
                <Image
                  src={BG}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="team"
                />
              </Col>
              <Col xs={12} lg={7}>
                <div className='text-center'>
                  <div className='mb-4'><h1 style={{ fontSize: '40px', fontWeight: "600", lineHeight: "48px", color: "#000000" }}> Sign Up Now</h1></div>
                  <div className='mb-4'><p style={{ fontSize: '16px', fontWeight: "400", lineHeight: "24px", color: "#999999" }}>Sign Up Now so we can notify you when this product is available!</p></div>
                  <Row>
                    <Col lg={8}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          size="lg"
                          type="Email"
                          placeholder="Enter your email"

                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4}>
                      <Button className="add-to-cart-button  border-0 text-center" >
                        Register
                      </Button>
                    </Col>
                  </Row>
                  <Form.Check
                    inline
                    label="Do not show this window"
                    name="group1"
                    type={"checkbox"}
                  />
                </div>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </div>
    </>
  )
}

export default SubscribeModal
