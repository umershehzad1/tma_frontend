"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Card, Col, Row } from "react-bootstrap";
import cart from "@/assets/cart.svg";
const CategoryCard = ({ sale, title, productImage, price, Oldprice, Even }) => {
  return (
    <>
      <Card
        className={` ${
          Even === 1
            ? "even-card my-2 position-relative rounded-0 category-product-card"
            : Even === 2
            ? "odd-card my-2 position-relative rounded-0 category-product-card"
            : "my-2 position-relative rounded-0 category-product-card"
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
        <Link href='/productdetail'>
        <Image
          src={productImage}
          width={0}
          height={0}
          alt={title}
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
        </Link>
       
        <Card.Body>
          <Row>
            <Col xs={8}>
            <Link href='/productdetail'>
              <Card.Text className="m-0" style={{ cursor: "pointer" }}>
                {title}
              </Card.Text>
              </Link>
              <Card.Title className="fs-6 category-price">
                N{price?.toFixed(2)}
                <small className="text-muted text-decoration-line-through mx-2">
                  N{Oldprice?.toFixed(2)}
                </small>
              </Card.Title>
            </Col>
            <Col xs={4}>
              
              <Image
                src={cart}
                width={0}
                height={0}
                alt="Add to Cart"
                style={{ cursor: "pointer", width:"100%"  }}
              />
              
              
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default CategoryCard;
