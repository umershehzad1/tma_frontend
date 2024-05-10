"use client";
import Image from "next/image";
import React, { useState } from "react";
import smfilter from "@/assets/smfilter.png";
import { Button, Col, Container, Row } from "react-bootstrap";
import Filter from "@/components/shared/filter/Filter";
import CategoryCard from "@/components/shared/categorycard/CategoryCard";
import productimg from "@/assets/image.png";
import banner from "@/assets/allproduct.png";
import FilterOverlay from "@/components/filteroverlay/FilterOverlay";
import "./allproducts.css"
const page = () => {
  const [showFilter, setShowFilter] = useState(false);
  const handleFilterButtonClick = () => {
    setShowFilter(true);
  };
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
  const handleCloseFilter = () => {
    setShowFilter(false);
  };

  return (
    <>
      <Image
        className="pb-4"
        src={banner}
        style={{ width: "100%", height: "auto" }}
      />
      <Container>
        <h2
          className="my-3"
          style={{
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "24px",
            color: "#006BA3",
          }}
        >
         All Products
        </h2>

        <Row>
          <Col xs={12} lg={3}>
            <div className="d-none d-md-block ">
              <Filter />
            </div>
          </Col>
          <Col xs={12} lg={9}>
            <div className="d-flex justify-content-between">
              <div className="d-block d-md-none">
                <Button
                  className="filter-btn "
                  onClick={handleFilterButtonClick}
                >
                  Filter
                  <Image
                    className="filter-image mx-2"
                    src={smfilter}
                    width={15}
                    height={14}
                    alt="team"
                  />
                </Button>
              </div>
              <div className="ms-auto pb-4 mt-3">
                <b>{products.length} </b>
                <span>Results Found</span>
              </div>
            </div>

            <Row>
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
          </Col>
        </Row>
      </Container>
      <FilterOverlay isOpen={showFilter} onClose={handleCloseFilter} />
    </>
  );
};

export default page;
