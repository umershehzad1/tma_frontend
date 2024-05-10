"use client";
import React from "react";
import ViewAllHeading from "../viewallheading/ViewAllHeading";
import {Container } from "react-bootstrap";
import image from "@/assets/image.png";
import CategoryCard from "../shared/categorycard/CategoryCard";
import "./RecentSearch.css"
const RecentSearch = () => {
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
      sale: "50",
      title: "Big Potatos",
      productImage: image,
      price: 14.9,
      Oldprice: 16,
      
    },


  
  ];

  return (
    <>
      <Container className="d-none d-md-block">
        <ViewAllHeading
          title="Your Recent Search"
          viewAllLink="/"
        />
        <div className="d-lg-flex">
          {products.map((product, index) => (
            <div key={product.id} className="top-selling-items">
             <CategoryCard
              sale={product.sale}
              title={product.title}
              productImage={product.productImage}
              price={product.price}
              Oldprice={product.Oldprice}
              Even={index%2===0?1:2}
              hasBorder={true}
            />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default RecentSearch;
