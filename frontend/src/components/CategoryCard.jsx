"use client";
import Image from "next/image";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import image from "../assets/image.png";
import cart from "../assets/cart.svg";
const CategoryCard = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} lg={3}>
            <Card className="my-2">
              <Image
                src={image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt="team"
              />
              <Card.Body>
                <Row>
                  <Col xs={9}>
                    <Card.Text className="m-0"  style={{ cursor: "pointer" }}>Red Chili</Card.Text>
                    <Card.Title className="fs-6">N14.99</Card.Title>
                  </Col>
                  <Col xs={3}>
                    <Image
                      src={cart}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "auto",
                        cursor: "pointer",
                      }}
                      alt="team"
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CategoryCard;
