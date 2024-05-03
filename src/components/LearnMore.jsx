"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import youtube from "@/assets/youtubeicon.svg";
import Image from "next/image";
import profile from "@/assets/profile.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const LearnMore = () => {


  const learnmore = [
    {
      image: profile,
      title: "Araiz Harry",
      description:
        "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
      link: "#",
    },
    {
        image: profile,
        title: "Alex Rena",
        description:
          "Eget lobortis lorem lacinia. Vivamus pharetra semper,",
        link: "#",
      },
      {
        image: profile,
        title: "Alex Rena",
        description:
          "Maecenas blandit risus elementum mauris malesuada.",
        link: "#",
      },
  ];

  var settings = {
    dots: false,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    controls:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
     
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};

  return (
    <>
      <div className="learn-more">
        <Container>
        <Row className="my-4 text-center">
          <div>
          <h3>Learn More About Us</h3>
          </div>
            
         
        </Row>
          <Row>
          <Slider {...settings}>
            {learnmore.map((product, index) => (
              <Col xs={12} lg={10} >
                <Card className="my-2 mx-2">
                  {/* <video
                  width="320"
                  height="240"
                  controls
                  preload="none"
                  ref={vidRef}
                >
                  <source src={play} type="video/mp4" />
                  <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                  />
                  Your browser does not support the video tag.
                </video>
                <button onClick={handlePlayVideo}>Play</button> */}
                 
                  <Card.Body>
                  <div className="pb-3">
                    <Image
                      src={product.image}
                      width={47}
                      height={47}
                      style={{ borderRadius: "60px" }}
                      alt="image"
                    />
                  </div>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text className="m-0 pe-4">{product.description}</Card.Text>
                    <Link className="text-decoration-none" href={product.link}>
                      Watch Now{" "}
                      <Image
                        src={youtube}
                        width={23}
                        height={17}
                        alt="Add to Cart"
                        style={{ cursor: "pointer" }}
                      />
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
             </Slider>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LearnMore;
