import React from "react";
import ViewAllHeading from "./ViewAllHeading";
import { Button, Col, Container, Row } from "react-bootstrap";
import Fruits from "@/assets/fruit.png";
import vegetable from "@/assets/vegetable.png";

import Meat from "@/assets/meatlarge.png";
import Cosmetics from "@/assets/cosmatics.png";
import Sale from "@/assets/sale.png";
import showmore from "@/assets/showmore.svg";
import Image from "next/image";
import Link from "next/link";
const imageMap = {
  Vegetables: { image: vegetable, link: "/vegetable" },
  Meat: { image: Meat, link: "/meat" },
  Cosmetics: { image: Cosmetics, link: "/cosmetic" },
  Sale: { image: Sale, link: "/sale" },
};

const NewlyAdded = () => {
  return (
    <>

      <Container>
        <ViewAllHeading
          title="Newly Added Products"
          viewAllLink="/categories"
        />
        <Row className="pt-3 pb-5">
          <Col xs={12} lg={6}>
            <div
              className=" d-flex justify-content-center align-items-center"
              style={{
                backgroundImage: `url(${Fruits.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "600px",
                borderRadius: "10px",
              }}
            >
              <div className="text-center">
                <h1 className="text-white" style={{ fontSize: "32px" }}>
                  Fruit
                </h1>
                <Link href="/meat">
                <Button className="newly-btn">
                  Shop Now
                  <span className="ms-2">
                    <Image
                      src={showmore}
                      width={13}
                      height={13}
                      alt="shipping"
                    />
                  </span>
                </Button>
                </Link>
               
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <Row className="mt-lg-0 mt-2">
              {Object.keys(imageMap).map((category, index) => (
                <Col key={index} xs={12} lg={6}>
                  <div
                    className=" d-flex justify-content-center align-items-center"
                    style={{
                      backgroundImage: `url(${imageMap[category].image.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "290px",
                      borderRadius: "10px",
                      marginBottom: "20px",
                    }}
                  >
                    <div className="text-center">
                      <h1 className="text-white" style={{ fontSize: "32px" }}>
                        {category}
                      </h1>
                      <Button className="newly-btn" as={Link} href={imageMap[category].link}>
                        Shop Now
                        <span className="ms-2">
                          <Image
                            src={showmore}
                            width={13}
                            height={13}
                            alt="shipping"
                          />
                        </span>
                      </Button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NewlyAdded;
