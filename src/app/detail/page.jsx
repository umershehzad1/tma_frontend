"use client"
import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import leaf1 from "@/assets/leaf-td.svg";
import apple from "@/assets/apple.svg";
import "./detail.css"

const page = () => {
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
    <Container>
      <Card>
      <div style={{ borderBottom: "1px solid #E6E6E6" }}>
            <h1
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "#1A1A1A",
                paddingLeft: "1.5rem",
                paddingBottom: "0.5rem",
                paddingTop: "1rem",
              }}
            >
              Order History
            </h1>
          </div>
      <Card
               
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


      </Card>
    
             
          
    <Card className='mt-4'>
      
      
      <Card.Body>
        <Card.Title>Order Summary</Card.Title>
        <div className='d-flex mt-4'>
          <div>
          <Image
                            src={leaf1}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="product"
                          />
          </div>
          <div className='ms-3'>
            <p style={{fontSize:"14px", fontWeight:"700", marginBottom:"0px"}}>2x <span style={{fontSize:"14px", fontWeight:"400"}}>Chinese Cabbage</span></p>
            <p style={{fontSize:"14px", fontWeight:"400", marginBottom:"0px"}}>N17.28</p>
            <p style={{fontSize:"14px", fontWeight:"400", marginBottom:"0px"}}>S / 1kg</p>
            <p style={{fontSize:"14px", fontWeight:"500", marginBottom:"0px"}}>N17.28</p>

          </div>
        </div>
        <div className='d-flex mt-4'>
          <div>
          <Image
                            src={apple}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="product"
                          />
          </div>
          <div className='ms-3'>
            <p style={{fontSize:"14px", fontWeight:"700", marginBottom:"0px"}}>2x <span style={{fontSize:"14px", fontWeight:"400"}}>Chinese Cabbage</span></p>
            <p style={{fontSize:"14px", fontWeight:"400", marginBottom:"0px"}}>N17.28</p>
            <p style={{fontSize:"14px", fontWeight:"400", marginBottom:"0px"}}>S / 1kg</p>
            <p style={{fontSize:"14px", fontWeight:"500", marginBottom:"0px"}}>N17.28</p>

          </div>
        </div>

       
       
      </Card.Body>
    </Card>


    
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
           
         
        
          <div className="history-btn">
             
              <Button
                className="add-to-cart-button  border-0 text-center"
                onClick={handleShowModal}
              >
                Cancel Order
              </Button>
            </div>

    </Container>
   
    </>
  )
}

export default page

