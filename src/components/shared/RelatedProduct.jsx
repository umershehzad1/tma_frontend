"use client";
import React from "react";

import { Button, Card, Col, Container, Row } from "react-bootstrap";
import image from "@/assets/image.png";
import CategoryCard from "./CategoryCard";



const RelatedProduct = () => {
   
  return (
    <>
     <Container>
        <h1 className="text-center mt-5" style={{fontSize:"24px", fontWeight:"500"}}>Related Products</h1>
        <Row>
          <Col lg={3}>
          <CategoryCard
                  sale="50"
                  title="Red Chilli"
                  productImage={image}
                  price={788}
                  Oldprice={600}

                />
          </Col>
          <Col lg={3}>
          <CategoryCard
                  sale="50"
                  title="Red Chilli"
                  productImage={image}
                  price={788}
                  Oldprice={600}

                />
          </Col>
          <Col lg={3}>
          <CategoryCard
                  sale="50"
                  title="Red Chilli"
                  productImage={image}
                  price={788}
                  Oldprice={600}

                />
          </Col>
          <Col lg={3}>
          <CategoryCard
                  sale="50"
                  title="Red Chilli"
                  productImage={image}
                  price={788}
                  Oldprice={600}

                />
          </Col>
        </Row>
      
        {/* <div className="d-lg-flex">
          {products.map((product, index) => (
            <div key={product.id} className="top-selling-items ms-5">
             <CategoryCard
              sale={product.sale}
              title={product.title}
              productImage={product.productImage}
              price={product.price}
              Oldprice={product.Oldprice}
              Even={index%2===0?1:2}
            />
            </div>
          ))}
        </div> */}
      </Container>
 
    </>
  )
}

export default RelatedProduct
