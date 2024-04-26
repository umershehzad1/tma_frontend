"use client";
import Image from "next/image";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import productImage from "@/assets/image.png";
import closebtn from "@/assets/cancelproduct.svg";
import cart from "@/assets/Bag.svg"

const HeartOverlay = ({ isOpen, onClose }) => {
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
          <Offcanvas.Title>Favorites</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div style={{height:"70vh",overflowY:"auto",overflowX:"hidden"}}>
            {products.map((product, index) => (
            <Row className="my-2">
              <Col xs={4} >
                <Image
                  src={product.Image}
                  width={0}
                  height={0}
                  alt={"Product"}
                  style={{ objectFit: "cover", height: "100%", width: "100%" }}
                />
              </Col>
              <Col xs={4} className=" text-center mt-4">
                <div>
                  <small className="mb-0 mt-3">{product.title}</small>
                  <div>
                    <small className="text-gray mb-1">
                      {product.amount} kg x{" "}
                      <b className="text-black">{product.price}</b>
                    </small>
                  </div>

                  
                </div>
              </Col>
              <Col xs={4} className="mt-3 d-flex text-center">
                <Button className="bg-transparent border-0">
                  <Image
                    src={closebtn}
                    width={24}
                    height={24}
                    alt={"Product"}
                  />
                </Button>
                <Button className="bg-transparent border-0">
                  <Image
                    src={cart}
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
            Add all to Cart
          </Button>
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default HeartOverlay
