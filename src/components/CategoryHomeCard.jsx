"use client";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ViewAllHeading from "./ViewAllHeading";
import Image from "next/image";
import meat from "@/assets/meat.png";
import cat1 from "@/assets/cat1.png";
import cat2 from "@/assets/cat2.png";
import cat3 from "@/assets/cat3.png";
import cat4 from "@/assets/cat4.png";
import cat5 from "@/assets/cat5.png";
import Link from "next/link";
import downarrow from "@/assets/arrowdown.svg";
const CategoryHomeCard = () => {
  const categories = [
    { name: "Meat", image: meat },
    { name: "Fresh & Vegetables", image: cat1 },
    { name: "Fish & Seafoods ", image: cat2 },
    { name: "Grains & Flower", image: cat3 },
    { name: "Breakfast Food", image: cat4 },
    { name: "Seasoning & Oil", image: cat5 },
  ];
  return (
    <>
      <Container>
        <ViewAllHeading title="Categories" viewAllLink="/categories" />
        <Row>
          {categories.map((category, index) => (
            <Col xs={6} lg={2} key={index}>
              <Card className="pt-2 my-2">
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
            </Col>
          ))}
        </Row>
        <div className="text-end py-3 ">
          <Link
            href=""
            className="text-decoration-none"
            style={{
              color: "rgba(0, 107, 163, 1)",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            <span className="mt-3">view More</span>
            <span className="ms-2">
              <Image src={downarrow} width={13} height={13} alt="shipping" />
            </span>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default CategoryHomeCard;
