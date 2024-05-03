"use client";

"use client";

import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Image from "next/image";
import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Rating from "react-rating-stars-component";
import leaf1 from "@/assets/leaf-td.svg";
import Close from "@/assets/Close.svg";
import apple from "@/assets/apple.svg";
import CancelOrder from "./CancelOrder";

const products = [
  { id: 1, size: "S", name: "Chinese Cabbage", price: "N17.28", image: leaf1 },
  { id: 2, size: "M", name: "Apple", price: "N14.00", image: apple },
  // Add more products as needed
];
const OrderDetail = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const total = [
    {
      title: "Subtotal",
      amount: "N31.28",
    },
    {
      title: "Shipping",
      amount: "Free",
    },
    {
      title: "Discount",
      amount: "20%",
    },
  ];
  return (
    <>
      <Card className="mt-5" style={{ border: "1px solid #E6E6E6" }}>
        <Card.Body className="">
          <div style={{ borderBottom: "1px solid #E6E6E6" }}>
            <h1
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "#1A1A1A",
                paddingLeft: "1.5rem",
                paddingBottom: "0.5rem",
                paddingTop: "0.3rem",
              }}
            >
              Order History
            </h1>
          </div>
          <Row>
            <Col xs={12} lg={8}>
              <Card
                className="my-4"
                style={{ border: "1px solid #E6E6E6" }}
              >
                <Card.Body>
                  <div style={{ borderBottom: "1px solid #E6E6E6" }}>
                    <p
                      style={{
                        color: "#999999",
                        fontWeight: "500",
                        fontSize: "14px",
                      }}
                    >
                      SHIPPING ADDRESS
                    </p>
                  </div>
                  <div className="mt-3">
                    <p
                      style={{
                        color: "#1A1A1A",
                        fontWeight: "500",
                        fontSize: "18px",
                      }}
                    >
                      Dainne Russell
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#999999",
                        fontWeight: "400",
                        fontSize: "14px",
                      }}
                    >
                      4140 Parker Rd. Allentown, New Mexico 31134
                    </p>
                  </div>

                  <div>
                    <h1
                      className="mt-5"
                      style={{
                        color: "#999999",
                        fontWeight: "500",
                        fontSize: "12px",
                      }}
                    >
                      EMAIL
                    </h1>
                    <p
                      style={{
                        color: "#1A1A1A",
                        fontWeight: "400",
                        fontSize: "16px",
                      }}
                    >
                      dainne.ressell@gmail.com
                    </p>
                  </div>
                  <div>
                    <h1
                      style={{
                        color: "#999999",
                        fontWeight: "500",
                        fontSize: "12px",
                      }}
                    >
                      PHONE
                    </h1>
                    <p
                      style={{
                        color: "#1A1A1A",
                        fontWeight: "400",
                        fontSize: "16px",
                      }}
                    >
                      (671) 555-0110
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} lg={4}>
              <Card
                className=" mt-4 "
                style={{ border: "1px solid #E6E6E6", minHeight: "325px" }}
              >
                <div
                  className="history-payment px-3 py-3"
                  style={{ borderBottom: "1px solid #E6E6E6" }}
                >
                  <div>
                    <h5
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "#999999",
                      }}
                    >
                      ORDER ID:
                    </h5>
                    <h5
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#1A1A1A",
                      }}
                    >
                      #4152
                    </h5>
                  </div>
                  <div>
                    <h5
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "#999999",
                      }}
                    >
                      PAYMENT METHOD:
                    </h5>
                    <h5
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#1A1A1A",
                      }}
                    >
                      PAYPAL
                    </h5>
                  </div>
                </div>

                {total.map((total, index) => (
                  <div
                    className="d-flex justify-content-between pt-3 mx-3 "
                    style={{ borderBottom: "1px solid #E6E6E6" }}
                  >
                    <div className="">
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "#666666",
                        }}
                      >
                        {total.title}:
                      </p>
                    </div>
                    <div>
                      <p
                        className="px-3"
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#1A1A1A",
                        }}
                      >
                        {total.amount}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="d-flex justify-content-between pt-3 ">
                  <div>
                    <p
                      className="px-3"
                      style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        color: "#1A1A1A",
                      }}
                    >
                      Total:
                    </p>
                  </div>
                  <div>
                    <p
                      className="px-3"
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#00283D",
                      }}
                    >
                      N25.04
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
          <div className="shopping-table">
            <Table
              hover
              style={{ border: "1px solid #E6E6E6" }}
              className="my-4"
            >
              <thead style={{ borderBottom: "1px solid #E6E6E6" }}>
                <tr>
                  <th
                    className="ps-3"
                    style={{
                      color: "#808080",
                      fontWeight: "500",
                      fontSize: "14px",
                      backgroundColor: "#F2F2F2",
                    }}
                  >
                    PRODUCT
                  </th>
                  <th
                    className="text-end"
                    style={{
                      color: "#808080",
                      fontWeight: "500",
                      fontSize: "14px",
                      backgroundColor: "#F2F2F2",
                    }}
                  >
                    SIZE
                  </th>
                  <th
                    className="text-end"
                    style={{
                      color: "#808080",
                      fontWeight: "500",
                      fontSize: "14px",
                      backgroundColor: "#F2F2F2",
                    }}
                  >
                    PRICE
                  </th>
                  <th
                    className="text-end"
                    style={{
                      color: "#808080",
                      fontWeight: "500",
                      fontSize: "14px",
                      backgroundColor: "#F2F2F2",
                    }}
                  >
                    QUANTITY
                  </th>
                  <th
                    className="text-center"
                    style={{
                      color: "#808080",
                      fontWeight: "500",
                      fontSize: "14px",
                      backgroundColor: "#F2F2F2",
                    }}
                  >
                    SUBTOTAL
                  </th>
                  <th
                    className="text-end"
                    style={{ backgroundColor: "#F2F2F2" }}
                  >
                    {" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <div className="d-flex">
                        <div>
                          <Image
                            src={product.image}
                            width={60}
                            height={60}
                            sizes="100vw"
                            alt="product"
                          />
                        </div>
                        <div className="mt-4 ms-2">
                          <h1
                            style={{
                              color: "#1A1A1A",
                              fontWeight: "400",
                              fontSize: "16px",
                            }}
                          >
                            {product.name}
                          </h1>
                        </div>
                      </div>
                    </td>
                    <td
                      className="text-end"
                      style={{ heigh: "40px", width: "43px" }}
                    >
                      <h1
                        className="mt-4 size text-center "
                        style={{
                          color: "#1A1A1A",
                          fontWeight: "400",
                          fontSize: "16px",
                        }}
                      >
                        {product.size}
                      </h1>
                    </td>

                    <td className="text-end">
                      <h1
                        className="mt-4"
                        style={{
                          color: "#1A1A1A",
                          fontWeight: "400",
                          fontSize: "16px",
                        }}
                      >
                        {product.price}
                      </h1>
                    </td>
                    <td className="text-center">
                      <h1
                        className="mt-4"
                        style={{
                          color: "#1A1A1A",
                          fontWeight: "400",
                          fontSize: "16px",
                        }}
                      >
                        1kg
                      </h1>
                    </td>
                    <td className="text-center">
                      <h1
                        className="mt-4"
                        style={{
                          color: "#1A1A1A",
                          fontWeight: "400",
                          fontSize: "16px",
                        }}
                      >
                        {product.price}
                      </h1>
                    </td>

                    <td className="text-end">
                      <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                        <Rating count={5} size={24} activeColor="#ffd700" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
           
          </div>
          <div className="history-btn">
              {" "}
              <Button
                className="add-to-cart-button  border-0 text-center"
                onClick={handleShowModal}
              >
                Cancel Order
              </Button>
            </div>
        </Card.Body>
        {/* <CancelOrder show={showModal} handleClose={handleCloseModal} /> */}
      </Card>
     
    </>
  );
};

export default OrderDetail;
