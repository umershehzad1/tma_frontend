import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import picture from "../assets/typefirst.png";
import Link from "next/link";
import instagram from "../assets/instagram-light.svg";
import instadark from "../assets/instagram-dark.svg";
const Instagram = () => {
    const follow=[
        {
            image:picture,
            link:"#"
        },
        {
            image:picture,
            link:"#"
        },
        {
            image:picture,
            link:"#"
        },
        {
            image:picture,
            link:"#"
        },
        {
            image:picture,
            link:"#"
        },
        {
            image:picture,
            link:"#"
        },
    ]
  return (
    <>
      <Container>
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
            <Col xs={2}>
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
