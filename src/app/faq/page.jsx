"use client";
import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import basket from "@/assets/basket.png";
import Accordion from "react-bootstrap/Accordion";
import veg from "@/assets/veg.png";
import "./faq.css"
const Faqs = ({show}) => {
  return (
    <>
    <div className="d-none d-md-block"> 
    {!show?<Image className="pb-2" src={veg} style={{ width: "100%" }} />:null}
    </div>
   
      
      <Container>
        <Row>
          <Col xs={12} lg={6} className="pt-5  order-1 order-lg-0 ">

            <div className="talk">

            <h1
              
              
            >
              Welcome, Let’s Talk <br /> About Our TMA Global
            </h1>
            </div>
            

            <div className="fqa">
              <Accordion>
                <Accordion.Item eventKey="0" className="mb-2">
                  <Accordion.Header className="accord-header">
                    In elementum est a ante sodales iaculis.
                  </Accordion.Header>
                  <Accordion.Body className="body-accord">
                    Morbi porttitor ligula in nunc varius sagittis. Proin dui
                    nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis
                    ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
                    tellus at accumsan. Donec a eros non massa vulputate ornare.
                    Vivamus ornare commodo ante, at commodo felis congue vitae.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="mb-2">
                  <Accordion.Header className="accord-header">
                    Etiam lobortis massa eu nibh tempor elementum.
                  </Accordion.Header>
                  <Accordion.Body>
                    Morbi porttitor ligula in nunc varius sagittis. Proin dui
                    nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis
                    ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
                    tellus at accumsan. Donec a eros non massa vulputate ornare.
                    Vivamus ornare commodo ante, at commodo felis congue vitae.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="mb-2">
                  <Accordion.Header className="accord-header">
                    In elementum est a ante sodales iaculis.
                  </Accordion.Header>
                  <Accordion.Body>
                    Morbi porttitor ligula in nunc varius sagittis. Proin dui
                    nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis
                    ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
                    tellus at accumsan. Donec a eros non massa vulputate ornare.
                    Vivamus ornare commodo ante, at commodo felis congue vitae.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="mb-2">
                  <Accordion.Header className="accord-header">
                    Aenean quis quam nec lacus semper dignissim.
                  </Accordion.Header>
                  <Accordion.Body>
                    Morbi porttitor ligula in nunc varius sagittis. Proin dui
                    nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis
                    ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
                    tellus at accumsan. Donec a eros non massa vulputate ornare.
                    Vivamus ornare commodo ante, at commodo felis congue vitae.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="mb-2">
                  <Accordion.Header className="accord-header">
                    Nulla tincidunt eros id tempus accumsan.
                  </Accordion.Header>
                  <Accordion.Body>
                    Morbi porttitor ligula in nunc varius sagittis. Proin dui
                    nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis
                    ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
                    tellus at accumsan. Donec a eros non massa vulputate ornare.
                    Vivamus ornare commodo ante, at commodo felis congue vitae.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
          <Col xs={12} lg={6} className="order-0 order-lg-1">
            <Image
              src={basket}
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faqs;
