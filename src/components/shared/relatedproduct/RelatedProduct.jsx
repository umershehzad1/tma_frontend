"use client";
import React from "react";

import { Button, Card, Col, Container, Row } from "react-bootstrap";
import image from "@/assets/image.png";
import CategoryCard from "../categorycard/CategoryCard";
import "./RelatedProduct.css"

const RelatedProduct = () => {
  const products = [
    {
      sale: "50",
      title: "Big Potatos",
      productImage: image,
      price: 14.9,
      Oldprice: 16,
    },
    {
      sale: "50",
      title: "Big Potatos",
      productImage: image,
      price: 14.9,
      Oldprice: 16,
    },
    {
      title: "Big Potatos",
      productImage: image,
      price: 14.9,
      Oldprice: 16,
    },
    {
      sale: "30",
      title: "Big Potatos",
      productImage: image,
      price: 14.9,
      Oldprice: 16,
    },
  ];
  return (
    <>
      <Container className="d-none d-md-block ">
        <h1
          className="text-center mt-5 related"
        
        >
          Related Products
        </h1>
        <Row>
          {products.map((product, index) => (
            <Col key={product.id} lg={3}>
              <CategoryCard
                sale={product.sale}
                title={product.title}
                productImage={product.productImage}
                price={product.price}
                Oldprice={product.Oldprice}
                hasBorder={true}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default RelatedProduct;
