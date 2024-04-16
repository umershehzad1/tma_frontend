"use client";
import Image from "next/image";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import cart from "@/assets/cart.svg";
const CategoryCard = ({ sale, title, productImage, price,Oldprice }) => {
  return (
    <>
      <Card
      // className={` ${
      //   index % 2 === 0
      //     ? "even-card my-2 position-relative rounded-0"
      //     : "odd-card my-2 position-relative rounded-0"
      // }`}

      className="my-2"
      >
        {sale ? (
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
              Sale {sale}%
            </small>
          </div>
        ) : (
          ""
        )}

        <Image
          src={productImage}
          width={0}
          height={0}
          alt={title}
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
        <Card.Body>
          <Row>
            <Col xs={9}>
              <Card.Text className="m-0" style={{ cursor: "pointer" }}>
                {title}
              </Card.Text>
              <Card.Title className="fs-6">
                N{price?.toFixed(2)}
                <small className="text-muted text-decoration-line-through mx-2">
                  N{Oldprice?.toFixed(2)}
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
    </>
  );
};

export default CategoryCard;
