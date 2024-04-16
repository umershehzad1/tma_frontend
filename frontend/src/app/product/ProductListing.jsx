"use client";
import React from "react";
import CategoryCard from "@/components/shared/CategoryCard";
import productimg from "@/assets/image.png";
import { Col, Row } from "react-bootstrap";

const ProductListing = () => {
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
      <div className="text-end pb-4">
        <b>{products.length} </b>
        <span>Results Found</span>
      </div>
      <Row>
        {products.map((product, index) => (
          <Col xs={12} lg={4}>
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
    </>
  );
};

export default ProductListing;
