import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import hero from "@/assets/heropng.png"
import Image from "next/image";
const Hero = () => {
  return (
    <>
    

    
     
        <Container fluid className="hero ">
        <Col xs={12} lg={12} className="ms-auto">
          <Row className="justify-content-between">
          
          <Col xs={12} lg={9} className='det-hero '>
          <Col xs={12} lg={9} className=' mx-auto'>
          <div>
              <h1>FREE SEATTLE DELIVERY AND RETURNS</h1>
              <p className="tag-line">Bringing the world to you</p>
              <p className="what-we-do">
                We delivery fresh African food all over the United States
              </p>
            </div>
            <div className="d-flex flex-column flex-lg-row">
              <div className="mt-2">
                <Button>See All Products</Button>
              </div>
              <div className="ms-lg-4 ms-0 mt-2">
                <Button className="px-5">About Us</Button>
              </div>
            </div>

          </Col>
          
          </Col>
          <Col xs={12} lg={3} className="p-0">
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
        </Row></Col>
        
        </Container>
      
    </>
  );
};

export default Hero;
