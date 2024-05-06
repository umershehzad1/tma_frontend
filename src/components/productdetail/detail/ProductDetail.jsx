"use client";
import React, { useState } from "react";
import Image from "next/image";
import Rating from 'react-rating-stars-component';
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Heart from "@react-sandbox/heart";
import { Badge, Carousel, Col, Row } from "react-bootstrap";
import group from "@/assets/Group.png";
import cart from "@/assets/whitecart.svg";
import CartOverlay from "@/components/cartoverlay/CartOverlay";
import SubscribeModal from "../subscribemodal/SubscribeModal";
import leaf from "@/assets/leaf.png";
import img1 from "@/assets/img1.png";
import img2 from "@/assets/img2.png";
import img3 from "@/assets/img3.png";
import "./productdetail.css"


const ProductDetail = () => {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
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
       <Carousel  className=" d-block d-md-none">
      <Carousel.Item>
      <Image 
        src={img1}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt="team"
      />
       
       
      </Carousel.Item>
      <Carousel.Item>
       
      <Image
            src={leaf}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="team"
          />
      </Carousel.Item>
      <Carousel.Item>
       
      <Image
            src={img2}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="team"
          />
      </Carousel.Item>

      <Carousel.Item>
      <Image
            src={img3}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="team"
          />
       
       </Carousel.Item>
      
    </Carousel>



















      <div className="product-detail">

        <div className="detail-head">
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
        <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <Rating
            count={5}
            size={24}
            activeColor="#ffd700"


          />
        </div>

        <hr className="text-gray" />
        <Row className="mt-5">
          <Col xs={12} lg={6}>
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
          <Col xs={12} lg={6}>

            <div className="d-flex mt-3 ">
              <h1 style={{ fontSize: "14px", fontWeight: "400", color: "#1A1A1A", marginTop: '0.7rem' }}>Share item:</h1>
              <Link href={"#"} className="footer-social mx-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4688_1817)">
                    <path
                      d="M11.9976 2.98875H13.6409V0.12675C13.3574 0.08775 12.3824 0 11.2469 0C8.87764 0 7.25464 1.49025 7.25464 4.22925V6.75H4.64014V9.9495H7.25464V18H10.4601V9.95025H12.9689L13.3671 6.75075H10.4594V4.5465C10.4601 3.62175 10.7091 2.98875 11.9976 2.98875Z"
                      fill="#4D4D4D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4688_1817">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link href={"#"} className="footer-social mx-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4688_10811)">
                    <path
                      d="M18 3.41888C17.3306 3.7125 16.6174 3.90713 15.8737 4.00163C16.6388 3.54488 17.2226 2.82713 17.4971 1.962C16.7839 2.38725 15.9964 2.68763 15.1571 2.85525C14.4799 2.13413 13.5146 1.6875 12.4616 1.6875C10.4186 1.6875 8.77387 3.34575 8.77387 5.37863C8.77387 5.67113 8.79862 5.95238 8.85938 6.22013C5.7915 6.0705 3.07687 4.60013 1.25325 2.36025C0.934875 2.91263 0.748125 3.54488 0.748125 4.2255C0.748125 5.5035 1.40625 6.63638 2.38725 7.29225C1.79437 7.281 1.21275 7.10888 0.72 6.83775C0.72 6.849 0.72 6.86363 0.72 6.87825C0.72 8.6715 1.99912 10.161 3.6765 10.5041C3.37612 10.5863 3.04875 10.6256 2.709 10.6256C2.47275 10.6256 2.23425 10.6121 2.01038 10.5626C2.4885 12.024 3.84525 13.0984 5.4585 13.1333C4.203 14.1154 2.60888 14.7071 0.883125 14.7071C0.5805 14.7071 0.29025 14.6936 0 14.6565C1.63462 15.7106 3.57188 16.3125 5.661 16.3125C12.4515 16.3125 16.164 10.6875 16.164 5.81175C16.164 5.64863 16.1584 5.49113 16.1505 5.33475C16.8829 4.815 17.4982 4.16588 18 3.41888Z"
                      fill="#4D4D4D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4688_10811">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link href={"#"} className="footer-social mx-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.24471 0C3.31136 0 0.687744 3.16139 0.687744 6.60855C0.687744 8.20724 1.58103 10.2008 3.01097 10.8331C3.22811 10.931 3.34624 10.8894 3.39462 10.688C3.43737 10.535 3.62525 9.79807 3.71638 9.45042C3.74451 9.33904 3.72988 9.24229 3.63988 9.13766C3.16511 8.58864 2.78821 7.58847 2.78821 6.65017C2.78821 4.24594 4.69967 1.91146 7.9522 1.91146C10.7648 1.91146 12.7325 3.73854 12.7325 6.35204C12.7325 9.30529 11.1698 11.3484 9.13912 11.3484C8.0152 11.3484 7.17816 10.4663 7.44367 9.37505C7.76431 8.07561 8.39321 6.6783 8.39321 5.74113C8.39321 4.90072 7.91844 4.20544 6.94865 4.20544C5.80447 4.20544 4.87631 5.33837 4.87631 6.85943C4.87631 7.82585 5.21832 8.47838 5.21832 8.47838C5.21832 8.47838 4.08652 13.0506 3.87614 13.9045C3.52062 15.3502 3.92451 17.6914 3.95939 17.8928C3.98077 18.0042 4.10565 18.0391 4.1754 17.9479C4.28678 17.8017 5.65484 15.8497 6.03848 14.4389C6.17799 13.9248 6.75064 11.84 6.75064 11.84C7.12753 12.5207 8.21546 13.0911 9.37426 13.0911C12.8214 13.0911 15.3123 10.0613 15.3123 6.30141C15.2999 2.69675 12.215 0 8.24471 0Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </Link>
              <Link href={"#"} className="footer-social mx-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4688_1829)">
                    <path
                      d="M17.9822 5.29205C17.9401 4.33564 17.7854 3.67812 17.5639 3.10836C17.3353 2.50359 16.9837 1.96213 16.523 1.51201C16.0729 1.05489 15.5278 0.699691 14.9301 0.474702C14.357 0.253147 13.7029 0.0984842 12.7465 0.0563159C11.783 0.0105764 11.4771 0 9.03324 0C6.58941 0 6.28351 0.0105764 5.32354 0.0527447C4.36713 0.0949129 3.70961 0.249713 3.13999 0.471131C2.53508 0.699691 1.99362 1.05132 1.54351 1.51201C1.08639 1.96213 0.731322 2.50716 0.506195 3.10493C0.284641 3.67812 0.129978 4.33207 0.08781 5.28848C0.0420705 6.25203 0.0314941 6.55792 0.0314941 9.00176C0.0314941 11.4456 0.0420705 11.7515 0.0842387 12.7115C0.126407 13.6679 0.281207 14.3254 0.502762 14.8952C0.731322 15.4999 1.08639 16.0414 1.54351 16.4915C1.99362 16.9486 2.53865 17.3038 3.13642 17.5288C3.70961 17.7504 4.36356 17.905 5.3201 17.9472C6.27994 17.9895 6.58597 17.9999 9.0298 17.9999C11.4736 17.9999 11.7795 17.9895 12.7395 17.9472C13.6959 17.905 14.3534 17.7504 14.9231 17.5288C16.1327 17.0611 17.0892 16.1047 17.5568 14.8952C17.7783 14.322 17.9331 13.6679 17.9752 12.7115C18.0174 11.7515 18.028 11.4456 18.028 9.00176C18.028 6.55792 18.0244 6.25203 17.9822 5.29205ZM16.3613 12.6411C16.3226 13.5202 16.1749 13.9949 16.0518 14.3114C15.7494 15.0956 15.127 15.7179 14.3429 16.0204C14.0264 16.1434 13.5483 16.2911 12.6726 16.3297C11.7232 16.372 11.4385 16.3824 9.03681 16.3824C6.63514 16.3824 6.34684 16.372 5.40087 16.3297C4.52179 16.2911 4.04709 16.1434 3.73062 16.0204C3.34039 15.8761 2.98519 15.6476 2.69688 15.3487C2.398 15.0568 2.16944 14.7052 2.02521 14.315C1.90214 13.9985 1.75448 13.5202 1.71589 12.6447C1.67358 11.6953 1.66314 11.4104 1.66314 9.00876C1.66314 6.60709 1.67358 6.31878 1.71589 5.37295C1.75448 4.49387 1.90214 4.01917 2.02521 3.7027C2.16944 3.31234 2.398 2.95727 2.70045 2.66883C2.9922 2.36994 3.34383 2.14138 3.73419 1.99729C4.05066 1.87422 4.52893 1.72656 5.40444 1.68783C6.35384 1.64566 6.63872 1.63508 9.04024 1.63508C11.4455 1.63508 11.7302 1.64566 12.6762 1.68783C13.5553 1.72656 14.03 1.87422 14.3464 1.99729C14.7367 2.14138 15.0919 2.36994 15.3802 2.66883C15.6791 2.96071 15.9076 3.31234 16.0518 3.7027C16.1749 4.01917 16.3226 4.49731 16.3613 5.37295C16.4035 6.32236 16.414 6.60709 16.414 9.00876C16.414 11.4104 16.4035 11.6917 16.3613 12.6411Z"
                      fill="#4D4D4D"
                    />
                    <path
                      d="M9.03337 4.37793C6.48061 4.37793 4.40942 6.44898 4.40942 9.00188C4.40942 11.5548 6.48061 13.6258 9.03337 13.6258C11.5863 13.6258 13.6573 11.5548 13.6573 9.00188C13.6573 6.44898 11.5863 4.37793 9.03337 4.37793ZM9.03337 12.0013C7.37727 12.0013 6.03393 10.6581 6.03393 9.00188C6.03393 7.34564 7.37727 6.00244 9.03337 6.00244C10.6896 6.00244 12.0328 7.34564 12.0328 9.00188C12.0328 10.6581 10.6896 12.0013 9.03337 12.0013Z"
                      fill="#4D4D4D"
                    />
                    <path
                      d="M14.9199 4.19472C14.9199 4.79084 14.4365 5.2742 13.8402 5.2742C13.2441 5.2742 12.7607 4.79084 12.7607 4.19472C12.7607 3.59845 13.2441 3.11523 13.8402 3.11523C14.4365 3.11523 14.9199 3.59845 14.9199 4.19472Z"
                      fill="#4D4D4D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4688_1829">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>

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
        <div className="mt-4  d-none d-md-block">
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


        <div className="mt-4 mt-4 d-block d-md-none">
          <div> <p style={{ color: "#1A1A1A", fontWeight: "500", fontSize: "14px" }}> Tag:{" "}   <span
              style={{
                color: "#808080",
                fontWeight: "400",
                fontSize: "14px",
              }}
            >Vegetables Healthy</span></p></div>
       

           
           
             
              <div  className="mx-1 text-black"
                style={{
                  textDecoration: "underline",
                  fontWeight: "400",
                  fontSize: "14px",
                }}>  Chinese</div>
                  <div  className="mx-1  mt-2"
                style={{
                  color:"#808080",
                  fontWeight: "400",
                  fontSize: "14px",
                }}> Cabbage</div>
                   <div  className="mx-1  mt-2"
                style={{
                  color: "#808080",
                  fontWeight: "400",
                  fontSize: "14px",
                }}>  Green Cabbage</div>
               
              
               
              
            
        
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
        <div className="mt-2 mb-2">
          <p style={{ color: "#808080", fontWeight: "400", fontSize: "14px" }}>
            {" "}
            Nationwide Shipping
          </p>
        </div>
        <div className="d-flex">
          <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}> <h1 className=' size text-center px-2 py-1 ' style={{ color: '#1A1A1A', fontWeight: '400', fontSize: '16px', marginRight: '1rem' }}>
            S
          </h1></div>
          <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}> <h1 className=' size text-center px-2 py-1 ' style={{ color: '#1A1A1A', fontWeight: '400', fontSize: '16px', marginRight: '1rem' }}>
            M
          </h1></div>
          <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}> <h1 className=' size text-center px-2 py-1' style={{ color: '#1A1A1A', fontWeight: '400', fontSize: '16px', marginRight: '1rem' }}>
            L
          </h1></div>
        </div>
        <div className="mb-4 d-none d-md-block">
          <Form.Check
            inline
            label="Notify Me when Product is Available"
            name="group1"
            type={"checkbox"}
            onClick={handleShowModal}
          />
        </div>
        <Row className="mt-4 d-block d-md-none">
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
        <hr className="text-gray" />
        <Row className="mt-2">
          <Col xs={4} lg={3} className="mt-2 xs-ms-">
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
          <Col xs={6} lg={7} className="mt-2">
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
          <Col xs={2} lg={2}>
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

        <Row className="mt-4 d-none d-md-block">
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
      <SubscribeModal show={showModal} handleClose={handleCloseModal} />
    </>
  );
};

export default ProductDetail;
