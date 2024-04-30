"use client";
import React from "react";
import {Container, Col, Row } from "react-bootstrap";
import Message from "./Message";
import Information from "./Information";


const page = () => {
  return (
  <>
  <Container>
    <Message/>
    <Information/>

  </Container>
  </>
  )
}

export default page
