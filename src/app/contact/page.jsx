"use client";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Message from "@/components/contact/message/Message";
import Information from "@/components/contact/information/Information";
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
