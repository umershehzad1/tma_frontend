import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "@/assets/logo.png";
const TmaFooter = () => {
    const currentYear = new Date().getFullYear();
  const footerlinks = [
    {
      title: "My Account",
      links: [
        { text: "My Account", href: "#" },
        { text: "Order History", href: "#" },
        { text: "Shoping Cart", href: "#" },
        { text: "Wishlist", href: "#" },
      ],
    },
    {
      title: "Helps",
      links: [
        { text: "Contact", href: "#" },
        { text: "Faqs", href: "#" },
        { text: "Terms & Condition", href: "#" },
        { text: "Privacy Policy", href: "#" },
      ],
    },
    {
      title: "Proxy",
      links: [
        { text: "About", href: "#" },
        { text: "Shop", href: "#" },
        { text: "Product", href: "#" },
        { text: "Track Order", href: "#" },
      ],
    },
    {
      title: "Categories",
      links: [
        { text: "Meat", href: "#" },
        { text: "Fresh Vegetables", href: "#" },
        { text: "Fish & Seafoods", href: "#" },
        { text: "Grains & Flower", href: "#" },
      ],
    },
  ];

  return (
    <>
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
                      style={{fontSize:"14px"}}
                    >
                      123-456-7890
                    </Link>
                    <span className="footer-links-color mx-2">or</span>
                    <Link
                      className="text-decoration-none text-white"
                      href="mailto:tmaglobal@gmail.com"
                      style={{fontSize:"14px"}}
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
                <Image className="mx-2" src={logo} />
                <Image className="mx-2" src={logo} />
                <Image className="mx-2" src={logo} />
                <Image className="mx-2" src={logo} />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default TmaFooter;
