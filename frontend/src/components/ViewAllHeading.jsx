import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import showmore from "../assets/showmore.svg";
import Image from "next/image";
const ViewAllHeading = ({ title, viewAllLink}) => {
  return (
    <>

        <Row className="my-4">
          <Col xs={6}>
            <h3>{title}</h3>
          </Col>
          <Col xs={6} className="text-end">
            <div className="">
              <Link href={viewAllLink} className="text-decoration-none">
                <span className="mt-3" style={{ color: "rgba(0, 40, 61, 1)" }}>
                  view All
                </span>
                <span className="ms-2">
                  <Image src={showmore} width={13} height={13} alt="shipping" />
                </span>
              </Link>
            </div>
          </Col>
        </Row>
    
    </>
  );
};

export default ViewAllHeading;
