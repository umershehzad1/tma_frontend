"use client"
import React from "react";
// import ViewAllHeading from "./ViewAllHeading";
import { Button, Col, Container, Row } from "react-bootstrap";
import Fruits from "@/assets/fruit.png";
import vegetable from "@/assets/vegetable.png";
import Meat from "@/assets/meatlarge.png";
import Cosmetics from "@/assets/cosmatics.png";
import Sale from "@/assets/sale.png";
import showmore from "@/assets/showmore.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const imageMap = {
    Fruits: Fruits,
    Vegetables: vegetable,
    Meat: Meat,
    Cosmetics: Cosmetics,
    Sale: Sale,

};

const NewProducts = () => {
    var settings = {
        dots: true,
        swipeToSlide: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <>
            <Container>
                {/* <ViewAllHeading
          title="Newly Added Products"
          viewAllLink="/categories"
        /> */}
                <Row className="pt-3 pb-5">

                    <Col xs={12} lg={12}>

                        <Row className="mt-lg-0 mt-2">
                            <Slider {...settings}>
                                {Object.keys(imageMap).map((category, index) => (
                                    <Col key={index} xs={6} lg={4}>
                                        <div
                                            className=" d-flex justify-content-center align-items-center"
                                            style={{
                                                backgroundImage: `url(${imageMap[category].src})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                height: "536px",
                                                width: "424px",
                                                borderRadius: "10px",
                                                marginBottom: "20px",
                                            }}
                                        >
                                            <div className="text-center">
                                                <h1 className="text-white" style={{ fontSize: "32px" }}>
                                                    {category}
                                                </h1>
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
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Slider>
                        </Row>

                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default NewProducts
