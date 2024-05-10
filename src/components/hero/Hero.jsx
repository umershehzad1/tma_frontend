import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import hero from "@/assets/heropng.png"
import Image from "next/image";
import Link from "next/link";
import "./Hero.css"
const Hero = () => {
  return (
    <>
    

    
     
        <Container fluid className="hero ">
        <Col xs={12} lg={12} className="ms-auto">
          <Row className="justify-content-between">
          
          <Col xs={6} lg={9} className='det-hero '>
          <Col xs={12} lg={9} className=' mx-auto'>
          <div>
              <h1>FREE SEATTLE DELIVERY AND RETURNS</h1>
              <p className="tag-line">Bringing the world to you</p>
              <p className="what-we-do">
                We delivery fresh African food all over the United States
              </p>
            </div>
            <div className="d-flex pb-4">
                <Link  href="/meat" > <div className="ms-lg-0 ms-0 me-lg-0 me-2 mt-2">
                <Button  >See All Products</Button>
              </div></Link>
              <Link  href="/about" > <div className="ms-lg-4 ms-0 mt-2">
                <Button >About Us</Button>
              </div></Link>
             
            </div>

          </Col>
          
          </Col>
          <Col xs={6} lg={3} className="p-0">
            <div>
            <Image
                  src={hero}
                  width={0}
                  height={0}
                  alt="shipping"
                  style={{ width: "100%", height: "auto" }}
                />
            </div>
         
          </Col>
        </Row>
        </Col>
        
        </Container>
      
    </>
  );
};

export default Hero;
