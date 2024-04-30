import React from "react";
import { Col, Row } from "react-bootstrap";
import leaf from "@/assets/leaf.png";
import img1 from "@/assets/img1.png";
import img2 from "@/assets/img2.png";
import img3 from "@/assets/img3.png";
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
            src={img1}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="team"
          />
        </Col>
        <Col lg={6} className="ps-0">
          <Image
            src={img2}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="team"
          />
        </Col>
      </Row>

      <Image
        src={img3}
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
