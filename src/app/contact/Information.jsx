"use client";
import React from "react";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import basket from "@/assets/basket.png";
import Accordion from 'react-bootstrap/Accordion';


const Information = () => {
  return (
    <>
      <Row>
        <Col xs={12} lg={6}>
          <h1 style={{ color: "#1A1A1A", fontWeight: "600", fontSize: "48px", lineHeight: '57.6px', marginTop: '1.5rem' }}>Welcome, Let’s Talk <br /> About Our TMA Global</h1>
          <Accordion>
            <Accordion.Item eventKey="0" className="mb-2">
              <Accordion.Header className="accord-header">In elementum est a ante sodales iaculis.
              </Accordion.Header>
              <Accordion.Body className="body-accord">
                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
                Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare.
                Vivamus ornare commodo ante, at commodo felis congue vitae.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mb-2">
              <Accordion.Header className="accord-header">Etiam lobortis massa eu nibh tempor elementum.
              </Accordion.Header>
              <Accordion.Body>
                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
                Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare.
                Vivamus ornare commodo ante, at commodo felis congue vitae.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="mb-2">
              <Accordion.Header className="accord-header">In elementum est a ante sodales iaculis.
              </Accordion.Header>
              <Accordion.Body>
                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
                Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare.
                Vivamus ornare commodo ante, at commodo felis congue vitae.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="mb-2">
              <Accordion.Header className="accord-header">Aenean quis quam nec lacus semper dignissim.
              </Accordion.Header>
              <Accordion.Body>
                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
                Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare.
                Vivamus ornare commodo ante, at commodo felis congue vitae.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="mb-2">
              <Accordion.Header className="accord-header">Nulla tincidunt eros id tempus accumsan.
              </Accordion.Header>
              <Accordion.Body>
                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
                Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare.
                Vivamus ornare commodo ante, at commodo felis congue vitae.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col xs={12} lg={6}>
          <Image
            src={basket}
            width={600}
            height={654}
          />
        </Col>
      </Row>
    </>
  )
}

export default Information
