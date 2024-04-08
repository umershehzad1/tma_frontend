import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <Container>
          <Row>
            <Col xs={8}>
              <div>
                <h1>FREE SEATTLE DELIVERY AND RETURNS</h1>
                <p className="tag-line">Bringing the world to you</p>
                <p className="what-we-do">We delivery fresh African food all over the United States</p>
              </div>
            </Col>
            <Col xs={4}>Bye</Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
