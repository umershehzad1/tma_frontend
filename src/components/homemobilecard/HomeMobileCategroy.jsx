"use client";
import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ViewAllHeading from "../viewallheading/ViewAllHeading";
import Image from "next/image";
import meat from "@/assets/meat.png";
import cat1 from "@/assets/cat1.png";
import cat2 from "@/assets/cat2.png";
import cat3 from "@/assets/cat3.png";
import cat4 from "@/assets/cat4.png";
import cat5 from "@/assets/cat5.png";
import Link from "next/link";
import downarrow from "@/assets/arrowdown.svg";
import uparrow from "@/assets/uparrow.svg";

const HomeMobileCategroy = ({categories}) => {
   
  return (
   <>
   <Container>
   <ViewAllHeading title="Categories" viewAllLink="/categories" />
  <div className="d-flex overflow-auto">
  {categories?.map((category, index) => (
           
           <Card key={index} className="pt-2 m-2 text-decoration-none " style={{minWidth:"40%"}} as={Link}  href={category?.link}>
       <div
         style={{
           width: "80%",
           margin: "auto",
           height: "100px",
           overflow: "hidden",
         }}
         className="my-2"
       >
         <Image
           src={category.image}
           width={0}
           height={0}
           alt={category.name}
           style={{
             objectFit: "contain",
             width: "100%",
             height: "100%",
           }}
         />
       </div>
       <Card.Body className="text-center">
         <Card.Title
           className="fs-6"
           style={{ color: "rgba(0, 107, 163, 1)" }}
         >
           {category.name}
         </Card.Title>
       </Card.Body>
     </Card>
    
  
   
  
 ))}
  </div>
       
      
   </Container>


   </>
  )
}

export default HomeMobileCategroy
