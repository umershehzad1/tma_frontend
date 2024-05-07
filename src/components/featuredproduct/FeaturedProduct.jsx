"use client";
import React from "react";
import ViewAllHeading from "../viewallheading/ViewAllHeading";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import image from "../../assets/image.png";
import CategoryCard from "../shared/categorycard/CategoryCard";
import Featured from "../featured/Featured";
import FeaturedCard from "../shared/ featuredcard/FeaturedCard";

const FeaturedProduct = () => {
  return (
    <>
      <section
        style={{
          backgroundColor: "#F7F7F7",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <Container>
          <ViewAllHeading title="Featured Products" viewAllLink="/" />

          <Row>
            <Col xs={12} lg={4} className="p-0">
              <Featured />
            </Col>
            <Col xs={12} lg={8}>
              <Row className="p-0">
                <Col lg={4} className="p-0">
                  <FeaturedCard
                    title="Red Chilli"
                    productImage={image}
                    price={788}
                    Oldprice={600}
                  />
                </Col>

                <Col lg={4} className="p-0">
                  <FeaturedCard
                    title="Red Chilli"
                    productImage={image}
                    price={788}
                    Oldprice={600}
                  />
                </Col>

                <Col lg={4} className="p-0">
                  <FeaturedCard
                    title="Red Chilli"
                    productImage={image}
                    price={788}
                    Oldprice={600}
                  />
                </Col>
              </Row>
              <Row className="p-0">
                <Col lg={4} className="p-0">
                  <FeaturedCard
                    title="Red Chilli"
                    productImage={image}
                    price={788}
                    Oldprice={600}
                  />
                </Col>

                <Col lg={4} className="p-0">
                  <FeaturedCard
                    sale="50"
                    title="Red Chilli"
                    productImage={image}
                    price={788}
                    Oldprice={600}
                  />
                </Col>

                <Col lg={4} className="p-0">
                  <FeaturedCard
                    title="Red Chilli"
                    productImage={image}
                    price={788}
                    Oldprice={600}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FeaturedProduct;
