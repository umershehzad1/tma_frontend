"use client";
import React from "react";
import CategoryCard from "@/components/shared/CategoryCard";
import productimg from "@/assets/image.png";
import {Container, Col, Row } from "react-bootstrap";
import Navigation from "./Navigation";

const page = () => {
  return (
    <>
    <Container>
        <Row>
            <Col xs={12} lg={3}>
                <Navigation/>
            </Col>
            <Col xs={12} lg={9}>
            </Col>
        </Row>
    </Container>

    </>
  )
}

export default page
