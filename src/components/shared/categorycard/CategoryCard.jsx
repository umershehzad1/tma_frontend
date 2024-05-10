"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Button, Card, Col, Row } from "react-bootstrap";
import cart from "@/assets/cart.svg";
import "./categoryCard.css";
import Heart from "@react-sandbox/heart";
const CategoryCard = ({ sale, title, productImage, price, Oldprice, Even,hasBorder }) => {
  const [showHeart, setShowHeart] = useState(false);
  const handleHeartButtonClick = () => {
    setShowHeart(true);
  };

  return (
    <>
      <Card
        className={` ${Even === 1
            ? "even-card my-2 position-relative  category-product-card"
            : Even === 2
              ? "odd-card my-2 position-relative  category-product-card"
              : "my-2 position-relative  category-product-card"
          }`}
          style={{ borderRadius: hasBorder ? "0" : "8px" }}
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
        <div
            className="position-absolute like-product"
            style={{ top: "0px", right: "5px" }}
          >
           <div className="m-2 d-none d-md-block">
                <Button class=" position-relative d-flex justify-content-center align-items-center" style={{background:"white",borderRadius:"60%",height:"50px",width:"50px",border:"1px solid #F2F2F2"}}>
                  <Heart
                    width={24}
                    height={24}
                    className="mx-2 "
                    // class="bg-transparent border-0 "
                    // active={active}
                    onClick={handleHeartButtonClick}
                  />
                </Button>
              </div>
          </div>
        <Link href="/productdetail">
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
              <Link href="/productdetail" className="text-decoration-none">
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
                style={{ cursor: "pointer", width: "100%" }}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default CategoryCard;
