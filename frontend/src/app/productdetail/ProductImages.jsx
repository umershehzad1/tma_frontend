import React from "react";
import { Col, Row } from "react-bootstrap";
import leaf from "@/assets/leaf.png";
import Image from "next/image";
const ProductImage = () => {
  return (
    <>
      <Image
        src={leaf}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt="team"
      />

      <Row className="mb-2">
        <Col lg={6} className="pe-0">
          <Image
            src={leaf}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="team"
          />
        </Col>
        <Col lg={6} className="ps-0">
          <Image
            src={leaf}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="team"
          />
        </Col>
      </Row>

      <Image
        src={leaf}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
        alt="team"
      />
    </>
  );
};

export default ProductImage;
