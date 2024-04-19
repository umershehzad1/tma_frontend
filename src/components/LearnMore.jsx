"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import youtube from "@/assets/youtubeicon.svg";
import Image from "next/image";
import profile from "@/assets/profile.png";
const LearnMore = () => {
  //   const vidRef = useRef(null);
  //   const handlePlayVideo = () => {
  //     vidRef.current.play();
  //   };

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
            {learnmore.map((product, index) => (
              <Col xs={12} lg={4}>
                <Card className="my-2">
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
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LearnMore;
