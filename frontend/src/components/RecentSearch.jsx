"use client";
import React from "react";
import ViewAllHeading from "./ViewAllHeading";
import { Card, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import cart from "../assets/cart.svg";
import image from "../assets/image.png";
const RecentSearch = () => {
  const products = [
    {
      id: 1,
      name: "Carrots",
      price: 14.99,
      originalPrice: 20.99,
      imageUrl: image,
      sale: "50",
    },
    {
      id: 2,
      name: "Apples",
      price: 9.99,
      originalPrice: 15.99,
      imageUrl: image,
    },
    {
      id: 3,
      name: "Carrots",
      price: 14.99,
      originalPrice: 20.99,
      imageUrl: image,
      sale: "10",
    },
    {
      id: 4,
      name: "Apples",
      price: 9.99,
      originalPrice: 15.99,
      imageUrl: image,
    },
    {
      id: 5,
      name: "Carrots",
      price: 14.99,
      originalPrice: 20.99,
      imageUrl: image,
      sale: "20",
    },
  ];

  return (
    <>
      <Container>
        <ViewAllHeading
          title="Your Recent Search"
          viewAllLink="/"
        />
        <div className="d-lg-flex">
          {products.map((product, index) => (
            <div key={product.id} className="top-selling-items">
              <Card
                className={` ${
                  index % 2 === 0
                    ? "even-card my-2 position-relative rounded-0"
                    : "odd-card my-2 position-relative rounded-0"
                }`}
              >
                {product.sale ? (
                  <div
                    className="position-absolute"
                    style={{ top: "14px", left: "10px" }}
                  >
                    <small
                      className="py-1 px-2 overflow-hidden text-white "
                      style={{
                        background: "rgba(234, 75, 72, 1)",
                        borderRadius: "4px",
                      }}
                    >
                      Sale {product.sale}%
                    </small>
                  </div>
                ) : (
                  ""
                )}

                <Image
                  src={product.imageUrl}
                  width={0}
                  height={0}
                  alt={product.name}
                  style={{ objectFit: "cover", height: "100%", width: "100%" }}
                />
                <Card.Body>
                  <Row>
                    <Col xs={9}>
                      <Card.Text className="m-0" style={{ cursor: "pointer" }}>
                        {product.name}
                      </Card.Text>
                      <Card.Title className="fs-6">
                        N{product.price.toFixed(2)}{" "}
                        <small className="text-muted text-decoration-line-through">
                          N{product.originalPrice.toFixed(2)}
                        </small>
                      </Card.Title>
                    </Col>
                    <Col xs={3}>
                      <Image
                        src={cart}
                        width={50}
                        height={50}
                        alt="Add to Cart"
                        style={{ cursor: "pointer" }}
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default RecentSearch;
