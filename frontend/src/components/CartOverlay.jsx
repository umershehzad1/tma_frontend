"use client";
import Image from "next/image";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import productImage from "@/assets/image.png";
import closebtn from "@/assets/cancelproduct.svg";
import { Noto_Serif_Khitan_Small_Script } from "next/font/google";
const CartOverlay = ({ isOpen, onClose }) => {
  const [count, setCount] = React.useState(0);
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
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

  const products = [
    {
      title: "Big Potatos",
      Image: productImage,
      amount: 2,
      price: 17.28,
    },
    {
      title: "Big Potatos",
      Image: productImage,
      amount: 2,
      price: 17.28,
    },
    
    
    
  ];

  return (
    <>
      <Offcanvas placement="end" show={isOpen} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart(2)</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div style={{height:"70vh",overflowY:"auto",overflowX:"hidden"}}>
            {products.map((product, index) => (
            <Row className="my-2">
              <Col xs={4}>
                <Image
                  src={product.Image}
                  width={0}
                  height={0}
                  alt={"Product"}
                  style={{ objectFit: "cover", height: "100%", width: "100%" }}
                />
              </Col>
              <Col xs={5}>
                <div>
                  <small className="mb-0 mt-3">{product.title}</small>
                  <div>
                    <small className="text-gray mb-1">
                      {product.amount} kg x{" "}
                      <b className="text-black">{product.price}</b>
                    </small>
                  </div>

                  <div className="inc-dec border-0 p-0">
                    <button
                      type="button"
                      className="btn-dec p-2"
                      style={{ lineHeight: "10px" }}
                      onClick={decNum}
                    >
                      -
                    </button>
                    <span>{count || 0}</span>

                    <button
                      type="button"
                      className="btn-inc p-2"
                      style={{ lineHeight: "10px" }}
                      onClick={incNum}
                    >
                      +
                    </button>
                  </div>
                </div>
              </Col>
              <Col xs={3} className="mt-3 text-center">
                <Button className="bg-transparent border-0">
                  <Image
                    src={closebtn}
                    width={24}
                    height={24}
                    alt={"Product"}
                  />
                </Button>
              </Col>
            </Row>
          ))}
            </div>
          
          <div className="d-flex justify-content-between">
            <div>
              <small className="m-0 text-gray">{products.length} Product</small>
            </div>
            <div>
              <small>
                <b>N31..28</b>
              </small>
            </div>
          </div>
          <Button className="add-to-cart-button w-100 border-0 my-2">
            Checkout
          </Button>
          <Button className="go-to-cart w-100 border-0">Go To Cart</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartOverlay;
