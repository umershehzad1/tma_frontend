"use client";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Message from "./Message";
import Information from "./Information";
import Faqs from "../faq/page";

const page = () => {
  return (
    <>
      <Container>
        <Message />
        <Faqs show />
      </Container>
    </>
  );
};

export default page;
