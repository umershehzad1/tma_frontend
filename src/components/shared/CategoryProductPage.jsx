"use client";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Filter from "@/components/shared/Filter";
import CategoryCard from "@/components/shared/CategoryCard";
const CategoryProductPage = ({ banner, title, products }) => {
  return (
    <>
      <Image className="pb-4" src={banner} style={{ width: "100%" }} />
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
          {title}
        </h2>

        <Row>
          <Col xs={12} lg={3}>
            <Filter />
          </Col>
          <Col xs={12} lg={9}>
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

          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CategoryProductPage;
