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
import "./CategoryHomeCard.css"

const CategoryHomeCard = () => {
  const [displayCount, setDisplayCount] = useState(6);
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { name: "Meat", image: meat, link: "/meat" },
    { name: "Fresh & Vegetables", image: cat1, link: "/vegetable" },
    { name: "Fish & Seafoods", image: cat2, link: "/fishandseafood" },
    { name: "Grains & Flower", image: cat3, link: "/grainandflower" },
    { name: "Breakfast Food", image: cat4, link: "/breakfast" },
    { name: "Seasoning & Oil", image: cat5, link: "/seasoningandoil" },
    { name: "Meat", image: meat, link: "/meat" },
    { name: "Fresh & Vegetables", image: cat1, link: "/vegetable" },
    { name: "Fish & Seafoods", image: cat2, link: "/fishandseafood" },
    { name: "Grains & Flower", image: cat3, link: "/grainandflower" },
    { name: "Breakfast Food", image: cat4, link: "/breakfast" },
    { name: "Seasoning & Oil", image: cat5, link: "/seasoningandoil" },
  ];

  const handleToggleView = () => {
    setShowAll(!showAll);
    setDisplayCount(showAll ? 6 : categories.length);
  };

  return (
    <Container>
      <ViewAllHeading title="Categories" viewAllLink="/categories" />
      <Row>
        {categories.slice(0, displayCount).map((category, index) => (
          <Col xs={6} lg={2} key={index}>
            <Card className="pt-2 my-2 text-decoration-none" as={Link}  href={category?.link}>
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
      {categories.length > 6 && (
        <div className="text-end py-3">
          <button
            onClick={handleToggleView}
            className="text-decoration-none btn"
            style={{
              color: "rgba(0, 107, 163, 1)",
              fontSize: "16px",
              fontWeight: "500",
              border: "none",
              background: "none",
            }}
          >
            <span className="mt-3">{showAll ? "View Less" : "View More"}</span>
            <span className="ms-2">
              <Image
                src={showAll ? uparrow : downarrow}
                width={13}
                height={13}
                alt="shipping"
              />
            </span>
          </button>
        </div>
      )}
    </Container>
  );
};

export default CategoryHomeCard;
