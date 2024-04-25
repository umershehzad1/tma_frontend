"use client";
import React from "react";

import {Container, Col, Row } from "react-bootstrap";

import OrganicFood from "./OrganicFood";
import Team from "./Team";

const page = () => {
  return (
    <>
    <Container><OrganicFood/></Container>
    <Team/>
    

    </>
  )
}

export default page
