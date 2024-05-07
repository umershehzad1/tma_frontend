"use client";
import React from "react";
import ViewAllHeading from "../viewallheading/ViewAllHeading";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import image from "../../assets/image.png";
import View from "../../assets/View1.svg";
import Wishlist from "../../assets/Wishlist1.svg";

const Featured = () => {
  const products = [
    {
      id: 1,
      name: "Carrots",
      price: 14.99,
      originalPrice: 20.99,
      imageUrl: image,
      sale: "50",
      best: true,
    },
  ];

  return (
    <>
      {products.map((product, index) => (
        <div key={product.id}>
          <Card
            style={{ minHeight: "570px" }}
            className={` ${
              index % 2 === 0
                ? "even-card  position-relative rounded-0"
                : "odd-card  position-relative rounded-0"
            }`}
          >
            <div
              className="position-absolute"
              style={{ top: "14px", left: "10px" }}
            >
              {product.sale ? (
                <small
                  className="py-1 px-2 overflow-hidden text-white "
                  style={{
                    background: "rgba(234, 75, 72, 1)",
                    borderRadius: "4px",
                  }}
                >
                  Sale {product.sale}%
                </small>
              ) : (
                ""
              )}
              {product.best ? (
                <small
                  className="py-1 px-2  ms-2 overflow-hidden text-white "
                  style={{
                    background: "rgba(35, 136, 255, 1)",
                    borderRadius: "4px",
                  }}
                >
                  Best Sale
                </small>
              ) : (
                ""
              )}
            </div>
            <div style={{ width: "100%", height: "300px" }}>
              <Image
                src={product.imageUrl}
                width={0}
                height={0}
                alt={product.name}
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>

         

            <Card.Body className="text-center">
            <Row >
              <Col xs={2}>
                <Image
                  src={Wishlist}
                  width={0}
                  height={0}
                  alt={product.name}
                  style={{
                    
                    height: "100%",
                    width: "100%",
                  }}
                />
              </Col>
              <Col xs={8}>
                <div>
                  <Link href="/checkout">
                    <Button className="w-100 featured-btn">Add to Cart</Button>
                  </Link>
                </div>
              </Col>
              <Col xs={2}>
                <Link href="/productdetail">
                  <Image
                    src={View}
                    width={0}
                    height={0}
                    alt={product.name}
                    style={{
                     
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </Link>
              </Col>
            </Row>
              <div
                style={{
                  fontSize: "18px",
                  lineHeight: "27px",
                  color: "rgba(0, 107, 163, 1)",
                }}
              >
                {product.name}
              </div>

              <div
                style={{
                  fontSize: "24px",
                  lineHeight: "36px",
                  color: "rgba(26, 26, 26, 1)",
                }}
              >
                N{product.price.toFixed(2)}{" "}
                <small className="text-muted text-decoration-line-through">
                  N{product.originalPrice.toFixed(2)}
                </small>
              </div>
              <div className="py-2">
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    color: "rgba(0, 107, 163, 1)",
                  }}
                >
                  Hurry up! Offer ends In:
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
};

export default Featured;
