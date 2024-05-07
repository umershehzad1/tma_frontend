import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "@/assets/logo.png";
import ApplePay from "@/assets/ApplePay.svg";
import Visa from "@/assets/Visa.svg";
import Discover from "@/assets/Discover.svg";
import Mastercard from "@/assets/Mastercard.svg";
import Payment from "@/assets/Payment.svg";
import Subscribe from "../subscribe/Subscribe";
import "./TmaFooter.css";
const TmaFooter = () => {
  const currentYear = new Date().getFullYear();
  const footerlinks = [
    {
      title: "My Account",
      links: [
        { text: "My Account", href: "/navigation/dashboard" },
        { text: "Order History", href: "/navigation/history" },
        { text: "Shoping Cart", href: "/checkout" },
        { text: "Wishlist", href: "#" },
      ],
    },
    {
      title: "Helps",
      links: [
        { text: "Contact", href: "/contact" },
        { text: "Faqs", href: "/faq" },
        { text: "Terms & Condition", href: "/termandcondition" },
        { text: "Privacy Policy", href: "/privacypolicy" },
      ],
    },
    {
      title: "Pages",
      links: [
        { text: "About", href: "/about" },
        { text: "Shop", href: "/" },
        { text: "Product", href: "/meat" },
        { text: "Track Order", href: "/navigation/history" },
      ],
    },
    {
      title: "Categories",
      links: [
        { text: "Meat", href: "/meat" },
        { text: "Fresh Vegetables", href: "/vegetable" },
        { text: "Fish & Seafoods", href: "fishandseafood" },
        { text: "Grains & Flower", href: "/grainandflower" },
      ],
    },
  ];

  return (
    <>
      <Subscribe />
      <footer style={{ background: "#1A1A1A" }}>
        <Container className="pt-4">
          <Row className="py-4">
            <Col xs={12} lg={4}>
              <Col xs={12} lg={10}>
                <div>
                  <Image src={logo} />
                  <p className="footer-links-color pt-3 pb-2">
                    Morbi cursus porttitor enim lobortis molestie. Duis gravida
                    turpis dui, eget bibendum magna congue nec.
                  </p>
                  <div className="pt-1">
                    <Link
                      className="text-decoration-none text-white"
                      href="tel:123-456-7890"
                      style={{ fontSize: "14px" }}
                    >
                      123-456-7890
                    </Link>
                    <span className="footer-links-color mx-2">or</span>
                    <Link
                      className="text-decoration-none text-white"
                      href="mailto:tmaglobal@gmail.com"
                      style={{ fontSize: "14px" }}
                    >
                      tmaglobal@gmail.com
                    </Link>
                  </div>
                </div>
              </Col>
            </Col>
            <Col xs={12} lg={8}>
              <Row>
                {footerlinks.map((category, index) => (
                  <Col xs={12} lg={3} key={index}>
                    <h5 className="text-white">{category.title}</h5>
                    <ul className="list-unstyled">
                      {category.links.map((link, idx) => (
                        <li key={idx} className="py-2">
                          <Link
                            href={link.href}
                            className="text-decoration-none footer-links-color"
                          >
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          <hr className="mt-3" style={{ color: "#999999" }} />
          <Row className="pb-3">
            <Col xs={12} lg={6}>
              <p className="footer-links-color mt-3">
                Tma Global eCommerce © {currentYear}. All Rights Reserved
              </p>
            </Col>
            <Col xs={12} lg={6}>
              <div className="d-flex justify-content-end">
                <Image className="mx-2" src={ApplePay} />
                <Image className="mx-2" src={Visa} />
                <Image className="mx-2" src={Discover} />
                <Image className="mx-2" src={Mastercard} />
                <Image className="mx-2" src={Payment} />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default TmaFooter;
