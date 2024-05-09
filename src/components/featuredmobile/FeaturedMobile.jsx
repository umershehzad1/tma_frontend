"use client";
import Image from "next/image";
import React, { useState } from "react";
import productimg from "@/assets/image.png";
import ViewAllHeading from "../viewallheading/ViewAllHeading";

import { Button, Col, Container, Row } from "react-bootstrap";

import CategoryCard from "@/components/shared/categorycard/CategoryCard";

const FeaturedMobile = () => {
    const products = [
        {
          sale: "50",
          title: "Big Potatos",
          productImage: productimg,
          price: 14.9,
          Oldprice: 16,
        },
        {
          sale: "50",
          title: "Big Potatos",
          productImage: productimg,
          price: 14.9,
          Oldprice: 16,
        },
        {
          title: "Big Potatos",
          productImage: productimg,
          price: 14.9,
          Oldprice: 16,
        },
        {
          sale: "30",
          title: "Big Potatos",
          productImage: productimg,
          price: 14.9,
          Oldprice: 16,
        },
        {
            sale: "50",
            title: "Big Potatos",
            productImage: productimg,
            price: 14.9,
            Oldprice: 16,
          },
          {
            sale: "10",
            title: "Big Potatos",
            productImage: productimg,
            price: 14.9,
            Oldprice: 16,
          },
      ];
  return (
   <>
   <Container className="d-block d-md-none">
  
          
         
            

            <Row>
            <ViewAllHeading
          title="Featured Products"
          viewAllLink="/"
        />
              {products.map((product, index) => (
                <Col xs={6} lg={4}>
                  <CategoryCard
                    sale={product.sale}
                    title={product.title}
                    productImage={product.productImage}
                    price={product.price}
                    Oldprice={product.Oldprice}
                  />
                </Col>
              ))}
            </Row>
         
       
   </Container>
   </>
  )
}

export default FeaturedMobile
