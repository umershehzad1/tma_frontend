import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import picture from "@/assets/typefirst.png";
import Post1 from "@/assets/Post1.png";
import Post2 from "@/assets/Post2.png";
import Post3 from "@/assets/Post3.png";
import Post4 from "@/assets/Post4.png";
import Post5 from "@/assets/Post5.png";
import Post6 from "@/assets/Post6.png";
import Link from "next/link";
import instagram from "@/assets/instagram-light.svg";
import instadark from "@/assets/instagram-dark.svg";
import "./Instagram.css"
const Instagram = () => {
    const follow=[
        {
            image:Post1,
            link:"#"
        },
        {
            image:Post6,
            link:"#"
        },
        {
            image:Post3,
            link:"#"
        },
        {
            image:Post4,
            link:"#"
        },
        {
            image:Post5,
            link:"#"
        },
        {
            image:Post6,
            link:"#"
        },
    ]
  return (
    <>
      <Container className="d-none d-md-block">
        <Row className="my-5 text-center">
          <div>
            <h3>
              <span className="mt-3">Follow us on </span>{" "}
              <Image src={instadark} width={34} height={34} />
            </h3>
          </div>
        </Row>
        <Row className="pb-5">
          {follow.map((follow, index) => (
            <Col xs={6} lg={2}>
              <div className="instaouter position-relative">
                <Image
                  src={follow.image}
                  width={0}
                  height={0}
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    borderRadius: "10px",
                  }}
                />
                <div class="overlay">
                  <div class="text">
                    <Link href={follow.link}>
                      <Image
                        src={instagram}
                        width={0}
                        height={0}
                        style={{
                          objectFit: "cover",
                          height: "100%",
                          width: "100%",
                          borderRadius: "10px",
                        }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Instagram;
