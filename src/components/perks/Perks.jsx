import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import shippingImage from "@/assets/shipping.svg";
import support from "@/assets/support.svg";
import secure from "@/assets/secure.svg";
import moneyback from "@/assets/money-back.svg";
const perksData = [
  {
    image: shippingImage,
    title: "Free Shipping",
    description: "Free shipping on all your orders",
  },
  {
    image: support,
    title: "Customer Support 24/7",
    description: "Instant access to Support",
  },
  {
    image: secure,
    title: "100% Secure Payment",
    description: "We ensure your money is save",
  },
  {
    image: moneyback,
    title: "Money-Back Guarantee",
    description: "Free Seattle delivery and returns",
  },
];

const Perks = () => {
  return (
    <div style={{ boxShadow: "0px 8px 40px 0px rgba(0, 38, 3, 0.08)" }}>
      <Container className="py-lg-4 py-3">
        <Row>
          {perksData.map((perk, index) => (
            <Col key={index} xs={12} lg={3} className="my-2">
              <div className="d-flex">
                <div className="mt-1" style={{ width: "40px", height: "40px" }}>
                  <Image
                    src={perk.image}
                    width={40}
                    height={40}
                    alt="shipping"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="ms-3">
                  <b className="fs-6">{perk.title}</b>
                  <p className="text-muted" style={{ fontSize: "12px" }}>
                    {perk.description}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Perks;
