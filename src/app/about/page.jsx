"use client";
import React from "react";

import { Container, Col, Row } from "react-bootstrap";

import OrganicFood from "./OrganicFood";
import Team from "./Team";

const page = () => {
  return (
    <>
      <Container>
        <OrganicFood />
       
      </Container>
      <section className="py-3" style={{backgroundColor:"#f2f2f2"}}>
      <Container>
     

       
        <Team />
       
      </Container>
      </section>


      
    </>
  );
};

export default page;
