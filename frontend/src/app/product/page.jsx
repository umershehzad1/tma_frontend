"use client";
import Image from "next/image";
import React from "react";
import banner from "@/assets/productheader.png";
import { Col, Container, Row } from "react-bootstrap";
import Filter from "@/app/product/Filter";
import ProductListing from "./ProductListing";
const page = () => {
  return (
    <>
      <Image className="pb-4" src={banner} style={{ width: "100%" }} />
      <Container>
        <h2
          className="my-3"
          style={{
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "24px",
            color: "#006BA3",
          }}
        >
          Vegetable
        </h2>

        <Row>
          <Col xs={12} lg={3}>
            <Filter />
          </Col>
          <Col xs={12} lg={9}>
            <ProductListing/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default page;
