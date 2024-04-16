import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import hero from "@/assets/heropng.png"
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <section className="hero py-5">
        <Container className="py-5">
          <Row>
            <Col xs={12} lg={8}>
              <div>
                <h1>FREE SEATTLE DELIVERY AND RETURNS</h1>
                <p className="tag-line">Bringing the world to you</p>
                <p className="what-we-do">
                  We delivery fresh African food all over the United States
                </p>
              </div>
              <div className="d-flex flex-column flex-lg-row">
                <div className="mt-2">
                  <Button>See All Products</Button>
                </div>
                <div className="ms-lg-4 ms-0 mt-2">
                  <Button className="px-5">About Us</Button>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              {/* <div>
              <Image
                    src={hero}
                    width={0}
                    height={0}
                    alt="shipping"
                    style={{ width: "100%", height: "auto" }}
                  />
              </div> */}
           
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
