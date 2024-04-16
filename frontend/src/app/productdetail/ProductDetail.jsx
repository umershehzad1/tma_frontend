"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Heart from "@react-sandbox/heart";
import { Badge, Col, Row } from "react-bootstrap";
import group from "@/assets/Group.png";
import cart from "@/assets/whitecart.svg";
import CartOverlay from "@/components/CartOverlay";

const ProductDetail = () => {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const handleCartButtonClick = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };
  const incNum = () => {
    setCount(count + 1);
  };

  const decNum = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  return (
    <>
      <div className="product-detail">
        <div>
          <h4>
            Chinese Cabbage <Badge className="stock">In Stock</Badge>
          </h4>
        </div>
        <div className="mb-4">
          <span
            className="text-gray text-decoration-line-through"
            style={{ fontSize: "20px", fontWeight: "400" }}
          >
            N48.00
          </span>
          <span className="" style={{ fontSize: "24px", fontWeight: "500" }}>
            {" "}
            N17.28
          </span>

          <Badge className="sale mx-2" pill>
            64% Off
          </Badge>
        </div>

        <hr className="text-gray" />
        <Row className="mt-5">
          <Col lg={6}>
            <span
              style={{
                color: "#1A1A1A",
                fontWeight: "400",
                fontSize: "14px",
              }}
            >
              Brand:
            </span>
            <span>
              <Image
                src={group}
                width={56}
                height={56}
                sizes="100vw"
                alt="team"
              />
            </span>
          </Col>
        </Row>
        <div className="mt-4">
          <p style={{ color: "#1A1A1A", fontWeight: "500", fontSize: "14px" }}>
            Category:{" "}
            <span
              style={{
                color: "#808080",
                fontWeight: "400",
                fontSize: "14px",
              }}
            >
              Vegetable
            </span>
          </p>
        </div>
        <div className="mt-4">
          <p style={{ color: "#1A1A1A", fontWeight: "500", fontSize: "14px" }}>
            Tag:{" "}
            <span
              style={{
                color: "#808080",
                fontWeight: "400",
                fontSize: "14px",
              }}
            >
              Vegetables Healthy
              <span
                className="mx-1 text-black"
                style={{
                  textDecoration: "underline",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                Chinese
              </span>
              Cabbage Green Cabbage
            </span>{" "}
          </p>
        </div>
        <div className="mt-2">
          <span
            className="mx-1 "
            style={{
              textDecoration: "underline",
              fontWeight: "400",
              fontSize: "14px",
            }}
          >
            Delivery
          </span>
        </div>
        <div className="mt-2 mb-4">
          <p style={{ color: "#808080", fontWeight: "400", fontSize: "14px" }}>
            {" "}
            Nationwide Shipping
          </p>
        </div>
        <hr className="text-gray" />
        <Row className="mt-2">
          <Col lg={3} className="mt-2">
            <div className="inc-dec text-center py-2">
              <button type="button" className="btn-dec " onClick={decNum}>
                -
              </button>
              <span>{count || 0}</span>

              <button type="button" className="btn-inc" onClick={incNum}>
                +
              </button>
            </div>
          </Col>
          <Col lg={7} className="mt-2">
            <Button className="add-to-cart-button w-100 border-0" onClick={handleCartButtonClick}>
              Add to Cart
              <Image
                src={cart}
                width={15}
                height={15}
                alt="team"
                className="button-text mx-2"
              />
            </Button>
          </Col>
          <Col lg={2}>
            <div className="heart-outer mt-2">
              <Heart
                width={24}
                height={24}
                className="mx-2 "
                active={active}
                onClick={() => setActive(!active)}
              />
            </div>
          </Col>
        </Row>
        <hr className="text-gray" />
        <div>
          <Form.Check
            inline
            label="Notify Me when Product is Available"
            name="group1"
            type={"checkbox"}
          />
        </div>
        <Row className="mt-5">
          <Col>
            <p
              style={{
                color: "#808080",
                fontWeight: "700",
                fontSize: "16px",
              }}
            >
              Product Description:{" "}
              <span
                style={{
                  color: "#808080",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
                consequat nec, ultrices et ipsum. Nulla varius magna a consequat
                pulvinar.
              </span>
            </p>
          </Col>
        </Row>
      </div>
      <CartOverlay isOpen={showCart} onClose={handleCloseCart} />
    </>
  );
};

export default ProductDetail;
