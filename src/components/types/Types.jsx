import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import showmore from "@/assets/white-arrow.svg";
import Image from "next/image";
import firsttype from "@/assets/typefirst.png";
import secondtype from "@/assets/secondtype.png";
import thirdtype from "@/assets/thirdtype.png";
import vegetable from "@/assets/vegetableside.png";
import Link from "next/link";
import "./Types.css"
const Types = () => {
  return (
    <>
      <Container>
        <Row className="py-4">
          <Col xs={12} lg={3} className="order-lg-0 order-1 " >
            <div className="types my-2">
              <h1>Different Types of Meat</h1>
              <p>
                Create your own product and love your self and describe yourself
                and love yourself
              </p>
              <Link href='/meat'>
              <Button>
                Shop Now
                <span className="ms-2">
                  <Image src={showmore} width={13} height={13} alt="shipping" />
                </span>
              </Button>
              </Link>
              
            </div>
          </Col>
          <Col xs={4} lg={3} className="order-lg-1 order-0" >
            <div className="my-2">
              <Image
                src={firsttype}
                width={0}
                height={0}
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </div>
          </Col>
          <Col xs={4} lg={3} className="order-xs-1" >
            <div className="my-2">
              <Image
                src={secondtype}
                width={0}
                height={0}
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </div>
          </Col>
          <Col xs={4} lg={3} className="order-xs-2" >
            <div className="my-2">
              <Image
                src={thirdtype}
                width={0}
                height={0}
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </div>
          </Col>
        </Row>
        <Row className="py-3">
          <Col xs={12} lg={7}>
            <div className="my-2">
              <Image
                src={vegetable}
                width={0}
                height={0}
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </div>
          </Col>
          <Col xs={12} lg={5}>
            <Col xs={12} lg={8} className="mx-auto">
              <div className="types my-2">
                <h1>Vegetables Good for Health</h1>
                <p>
                  Health is the most important thing in the life of every human
                  being. Shop your Favorite Vegetables Now.
                </p>
                <Link href='/vegetable'>
                <Button>
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
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Types;



