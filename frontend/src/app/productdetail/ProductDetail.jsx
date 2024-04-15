"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";

import { Badge, Card, Col, Container, Row } from "react-bootstrap";

// import breadcrumbs from "../assets/breadcrumbs.png";
// import productimage from "../assets/product-image.png";
// import product1 from "../assets/Product1.png";
// import product2 from "../assets/product2.png";
// import product3 from "../assets/Product3.png";
// import group from "../assets/Group.png";
// import Badge from 'react-bootstrap/Badge';
// import facebook from "../assets/facebook.png";
// import twitter from "../assets/twitter.png";
// import pinterest from "../assets/pinterest.png";
// import insta from "../assets/insta.png";
// import Rectangle from "../assets/Rectangle.png";
// import heart from "../assets/heart.png";

const ProductDetail = () => {
  const [count, setCount] = useState(0);

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
          <span className="text-gray text-decoration-line-through">N48.00</span>{" "}
          <b>
            {" "}
            N17.28{" "}
            <Badge className="sale" pill>
              64% Off
            </Badge>
          </b>
        </div>

        <hr className="text-gray" />
  
        <div className="mt-4">
          <b style={{ color: "#1A1A1A" }}>Category: </b>
          <span className="font-normal fs-6 text-gray">Vegetable</span>
        </div>
        <div className="mt-4">
          <b style={{ color: "#1A1A1A" }}>Tag: </b>
          <span className="font-normal fs-6 text-gray">
            Vegetables Healthy
            <span
              className="mx-1 text-black"
              style={{ textDecoration: "underline", fontWeight: "bold" }}
            >
              Chinese
            </span>
            Cabbage Green Cabbage
          </span>
        </div>
        <div className="mt-2">
          <span
            className="mx-1 "
            style={{ textDecoration: "underline", fontWeight: "bold" }}
          >
            Delivery
          </span>
        </div>
        <div className="mt-2 mb-4">
          <p className="font-normal fs-6 text-gray"> Nationwide Shipping</p>
        </div>
        <hr className="text-gray" />

        <hr className="text-gray" />
      </div>

      {/* <div className='mb-5'>
                <Image
                    src={breadcrumbs}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    alt="team"
                />
            </div> */}
      {/* <Container className='product-detail'>
                <Row>
                    <Col xs={12} lg={6}>
                        <Image
                            src={productimage}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            alt="team"
                        />
                    </Col>
                    <Col xs={12} lg={6}>

                        <div className='product-detail'>
                        <div>
                            <h4 >Chinese Cabbage <Badge className="stock"  >In Stock</Badge></h4>

                        </div>
                        <div className='mb-4'><span className='text-gray text-decoration-line-through'>N48.00</span> <b > N17.28 <Badge className='sale' pill >
                            64% Off
                        </Badge></b></div>

                        <hr className='text-gray' />
                        <Row className='mt-5'>
                            <Col lg={6} >
                                <span style={{color: '#1A1A1A'}}>Brand:</span><span>
                                    <Image
                                        src={group}
                                        width={56}
                                        height={56}
                                        sizes="100vw"

                                        alt="team"
                                    />
                                </span>

                            </Col>
                            <Col lg={6}>
                                <div className='social mt-2'>
                                    <div className='d-flex'>
                                        <p className='mt-2' style={{ color: '#1A1A1A' }}>Share Item:</p>

                                    </div>
                                    <div>
                                        <Image
                                            src={facebook}
                                            width={40}
                                            height={40}

                                            sizes="100vw"

                                            alt="team"
                                        />

                                    </div>
                                    <div>
                                        <Image
                                            src={twitter}
                                            width={40}
                                            height={40}

                                            sizes="100vw"

                                            alt="team"
                                        />

                                    </div>
                                    <div>
                                        <Image
                                            src={pinterest}
                                            width={40}
                                            height={40}

                                            sizes="100vw"

                                            alt="team"
                                        />

                                    </div>
                                    <div>
                                        <Image
                                            src={insta}
                                            width={40}
                                            height={40}

                                            sizes="100vw"

                                            alt="team"
                                        />

                                    </div>
                                </div>

                            </Col>
                        </Row>
                        <div className='mt-4'>
                            <b style={{ color: '#1A1A1A' }} >Category: </b><span className='font-normal fs-6 text-gray'>
                                Vegetable
                            </span>

                        </div>
                        <div className='mt-4'>
                            <b style={{ color: '#1A1A1A' }}>Tag: </b>
                            <span className='font-normal fs-6 text-gray'>
                                Vegetables Healthy
                                <span className='mx-1 text-black' style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                                    Chinese
                                </span>
                                Cabbage Green Cabbage
                            </span>
                        </div>
                        <div className='mt-2'>
                            <span className='mx-1 ' style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                                Delivery
                            </span>
                        </div>
                        <div className='mt-2 mb-4'>
                            <p className='font-normal fs-6 text-gray'> Nationwide Shipping</p>
                        </div>
                        <hr className='text-gray' />
                        <Row className='mt-2'>
                            <Col lg={3}>
                             <div className="inc-dec">
                             <button type='button' onClick={decNum}>-</button>
                                        <span>{count || 0}</span>
                                      

                                        <button type='button' onClick={incNum}>+</button>
                                    </div> 
                            </Col>
                            <Col lg={7} className='mt-2'>
                                <Button className='add-to-cart-button'>
                                    Add to Cart

                                    <Image
                                        src={Rectangle}
                                        width={15}
                                        height={15}
                                        alt="team"
                                        className='button-text'
                                    />
                                </Button>
                            </Col>
                            <Col lg={2} >
                                <Button className='whilist'>
                                    <Image
                                        src={heart}
                                        width={52}
                                        height={52}
                                        alt="team"

                                    />



                                </Button>

                            </Col>
                        </Row>
                        <hr className='text-gray' />
                        <Row className='mt-5'>
                            <Col>
                                <b className='text-gray' >Product Description: </b><span className='font-normal fs-6 text-gray'>
                                 Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                 Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. 
                                </span>
                            </Col>
                        </Row>
                        </div>
                     
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={6} className='mb-5'>
                        <Row className='mb-2'>
                            <Col lg={6} className='pe-0'>
                                <Image
                                    src={product1}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }}
                                    alt="team"
                                />

                            </Col>
                            <Col lg={6} className='ps-0'>
                                <Image
                                    src={product2}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }}
                                    alt="team"
                                />

                            </Col>
                        </Row>

                        <Image
                            src={product3}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto", objectFit: "cover" }}
                            alt="team"
                        />


                    </Col>

                </Row>
            </Container> */}
    </>
  );
};

export default ProductDetail;
