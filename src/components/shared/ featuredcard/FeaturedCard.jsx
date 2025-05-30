"use client";
import Image from "next/image";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import cart from "@/assets/cart.svg";
import Link from "next/link";

const FeaturedCard = ({ sale, title, productImage, price, Oldprice, Even }) => {
  return (
    <>
      <Card
        className={` ${
          Even === 1
            ? "even-card  position-relative rounded-0"
            : Even === 2
            ? "odd-card  position-relative rounded-0"
            : "position-relative rounded-0"
        }`}
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
        <Link href="/productdetail">
          <div style={{ height: "200px", overflow: "hidden" }}>
            <Image
              src={productImage}
              width={0}
              height={0}
              alt={title}
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </div>
        </Link>

        <Card.Body>
          <Row>
            <Col xs={9}>
              <Link href="/productdetail" className="text-decoration-none">
                <Card.Text className="m-0 text-decoration-none" style={{ cursor: "pointer" }}>
                  {title}
                </Card.Text>
              </Link>
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
                width={0}
                height={0}
                alt="Add to Cart"
                style={{ cursor: "pointer", width:'100%' }}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default FeaturedCard;
