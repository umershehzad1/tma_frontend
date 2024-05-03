"use client";
import React from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import organic from "@/assets/organic.png";
import basket from "@/assets/basket.png";
import basket1 from "@/assets/basket1.png";
import leaf1 from "@/assets/leaf1.png";
import headphone from "@/assets/headphone.png";
import star from "@/assets/star.png";
import bag1 from "@/assets/bag1.png";
import box1 from "@/assets/box1.png";
import truck from "@/assets/truck.png";
import Check from "@/assets/Check.png";
import arrow from "@/assets/order-arrow.svg";

const OrganicFood = () => {
  return (
    <>
      <Row className="py-lg-5 py-2">
        <Col xs={12} lg={6} className="pt-3 pt-lg-5 mt-3 mt-lg-5 about-heading">
          <h2>100% Trusted Organic Food Store</h2>
          <p className="mt-3">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </p>
        </Col>
        <Col xs={12} lg={6}>
          <Image
            src={organic}
            width={0}
            height={0}
            alt="team"
            style={{ borderRadius: "8px", width: "100%",height:"auto" }}
          />
        </Col>
      </Row>

      <Row className="py-lg-5 py-2">
        <Col xs={12} lg={6} className="d-none d-lg-block">
          <Image
            src={basket}
            width={0}
            height={0}
            alt="team"
            style={{ borderRadius: "8px", width: "100%" }}
          />
        </Col>
        <Col xs={12} lg={6} className="pt-3 pt-lg-5 about-heading">
          <h2>100% Trusted Organic Food Store</h2>
          <p className="mt-3">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi. Nulla eu eros consequat tortor tincidunt feugiat.
          </p>

          <Row className="mt-3">
            <Col xs={12} lg={6}>
              <div className="organic">
                <div>
                  <Image
                    src={leaf1}
                    width={72}
                    height={72}
                    sizes="100vw"
                    alt="team"
                  />
                </div>
                <div className="ms-3 mt-2">
                  <h1
                    style={{
                      color: "#1A1A1A",
                      fontWeight: "500",
                      fontSize: "18px",
                    }}
                  >
                    100% Organic food
                  </h1>
                  <p
                    style={{
                      color: "#808080",
                      fontWeight: "400",
                      fontSize: "14px",
                    }}
                  >
                    100% healthy & Fresh food.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="organic">
                <div>
                  <Image
                    src={headphone}
                    width={72}
                    height={72}
                    sizes="100vw"
                    alt="team"
                  />
                </div>
                <div className="ms-3 mt-2">
                  <h1
                    style={{
                      color: "#1A1A1A",
                      fontWeight: "500",
                      fontSize: "18px",
                    }}
                  >
                    Great Support 24/7
                  </h1>
                  <p
                    style={{
                      color: "#808080",
                      fontWeight: "400",
                      fontSize: "14px",
                    }}
                  >
                    Instant access to Contact
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12} lg={6}>
              <div className="organic">
                <div>
                  <Image
                    src={star}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="team"
                  />
                </div>
                <div className="ms-3 mt-2">
                  <h1
                    style={{
                      color: "#1A1A1A",
                      fontWeight: "500",
                      fontSize: "18px",
                    }}
                  >
                    Customer Feedback
                  </h1>
                  <p
                    style={{
                      color: "#808080",
                      fontWeight: "400",
                      fontSize: "14px",
                    }}
                  >
                    Our happy customer
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="organic">
                <div>
                  <Image
                    src={bag1}
                    width={72}
                    height={72}
                    sizes="100vw"
                    alt="team"
                  />
                </div>
                <div className="ms-3 mt-2">
                  <h1
                    style={{
                      color: "#1A1A1A",
                      fontWeight: "500",
                      fontSize: "18px",
                    }}
                  >
                    100% Sucure Payment
                  </h1>
                  <p
                    style={{
                      color: "#808080",
                      fontWeight: "400",
                      fontSize: "14px",
                    }}
                  >
                    We ensure your money is save
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12} lg={6}>
              <div className="organic">
                <div>
                  <Image
                    src={truck}
                    width={72}
                    height={72}
                    sizes="100vw"
                    alt="team"
                  />
                </div>
                <div className="ms-3 mt-2">
                  <h1
                    style={{
                      color: "#1A1A1A",
                      fontWeight: "500",
                      fontSize: "18px",
                    }}
                  >
                    100% Organic food
                  </h1>
                  <p
                    style={{
                      color: "#808080",
                      fontWeight: "400",
                      fontSize: "14px",
                    }}
                  >
                    100% healthy & Fresh food.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="organic">
                <div>
                  <Image
                    src={box1}
                    width={72}
                    height={72}
                    sizes="100vw"
                    alt="team"
                  />
                </div>
                <div className="ms-3 mt-2">
                  <h1
                    style={{
                      color: "#1A1A1A",
                      fontWeight: "500",
                      fontSize: "18px",
                    }}
                  >
                    Great Support 24/7
                  </h1>
                  <p
                    style={{
                      color: "#808080",
                      fontWeight: "400",
                      fontSize: "14px",
                    }}
                  >
                    Instant access to Contact
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="py-lg-5 py-2">
        <Col
          xs={12}
          lg={6}
          className="pt-3 pt-lg-5 mt-3 mt-lg-5 about-heading d-none d-lg-block"
        >
          <h2>We Delivered, You Enjoy Your Order.</h2>
          <p className="mt-3">
            Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
            ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim
            diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum
            nunc eget elementum.
          </p>
          <div>
            <Row className="mt-2">
              <Col xs={12} lg={12}>
                <div className="organic">
                  <div>
                    <Image
                      src={Check}
                      width={20}
                      height={20}
                      sizes="100vw"
                      alt="team"
                    />
                  </div>
                  <div className="ms-3 mt-2">
                    <h1
                      style={{
                        color: "#666666",
                        fontWeight: "400",
                        fontSize: "14px",
                      }}
                    >
                      Sed in metus pellentesque.
                    </h1>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col xs={12} lg={12}>
                <div className="organic">
                  <div>
                    <Image
                      src={Check}
                      width={20}
                      height={20}
                      sizes="100vw"
                      alt="team"
                    />
                  </div>
                  <div className="ms-3 mt-2">
                    <h1
                      style={{
                        color: "#666666",
                        fontWeight: "400",
                        fontSize: "14px",
                      }}
                    >
                      Fusce et ex commodo, aliquam nulla efficitur, tempus
                      lorem.
                    </h1>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col xs={12} lg={12}>
                <div className="organic">
                  <div>
                    <Image
                      src={Check}
                      width={20}
                      height={20}
                      sizes="100vw"
                      alt="team"
                    />
                  </div>
                  <div className="ms-3 mt-2">
                    <h1
                      style={{
                        color: "#666666",
                        fontWeight: "400",
                        fontSize: "14px",
                      }}
                    >
                      Maecenas ut nunc fringilla erat varius.
                    </h1>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <Button className="add-to-cart-button  border-0 text-center mt-5">
            Shop Now
            <Image
              src={arrow}
              width={15}
              height={12}
              alt="team"
              className="button-text mx-2"
            />
          </Button>
        </Col>
        <Col xs={12} lg={6}>
          <Image
            src={basket1}
            width={0}
            height={0}
            alt="team"
            style={{ borderRadius: "8px", width: "100%" }}
          />
        </Col>
      </Row>
    </>
  );
};

export default OrganicFood;
