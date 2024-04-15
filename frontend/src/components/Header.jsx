"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Heart from "@react-sandbox/heart";
import cart from "@/assets/Bag.svg"
function Header() {
  const [active, setActive] = useState(false);
  const navItems = [
    { title: "Meat", href: "#" },
    { title: "Vegetables", href: "#" },
    { title: "Fish & Seafoods ", href: "#" },
    { title: "Grains & Flowers", href: "#" },
    { title: "Breakfast", href: "#" },
    { title: "Seasoning & Oil", href: "#" },
    {
      title: "Others",
      items: [
        { title: "Action", href: "#" },
        { title: "Another action", href: "#" },
        { title: "Something else here", href: "#" },
      ],
    },
  ];

  return (
    <>
      <Container>
        <div className="text-end">
          <div className="pt-1">
            <Link
              className="text-decoration-none"
              href=""
              style={{ fontSize: "14px", color: "#666666" }}
            >
              Sign In
            </Link>
            <span className="footer-links-color mx-2">/</span>
            <Link
              className="text-decoration-none"
              href=""
              style={{ fontSize: "14px", color: "#666666" }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </Container>
      <hr className="mt-2 mb-2" style={{ color: "#999999" }} />
      <Navbar expand="lg" className="bg-transparent header">
        <Container className="pb-2">
          <Navbar.Brand href="#">
            <Image src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {navItems.map((item, index) => {
                if (item.items) {
                  return (
                    <NavDropdown
                      title={item.title}
                      id={`nav-dropdown-${index}`}
                      key={index}
                    >
                      {item.items.map((subItem, subIndex) => (
                        <NavDropdown.Item
                          href={subItem.href}
                          key={`${index}-${subIndex}`}
                        >
                          {subItem.title}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  );
                } else {
                  return (
                    <Link
                      href={item.href}
                      key={index}
                      disabled={item.disabled}
                      className="mt-2 text-decoration-none mx-3"
                    >
                      {item.title}
                    </Link>
                  );
                }
              })}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button className="search-btn">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.364 3a7.364 7.364 0 1 0 0 14.727 7.364 7.364 0 0 0 0-14.727v0Z"></path>
                  <path d="M15.857 15.86 21 21.001"></path>
                </svg>
              </Button>
              <div className="m-2" style={{ borderRight: "2px solid #cccccc" }}>
                <Heart
                  width={24}
                  height={24}
                  className="mx-2"
                  active={active}
                  onClick={() => setActive(!active)}
                />
              </div>
              <div className="mt-2">
                <button type="button" class="bg-transparent border-0 position-relative">
                <Image src={cart}/>
                  <span class="position-absolute top-30 start-5 translate-middle badge rounded-pill" style={{background:"rgb(11, 47, 75)"}}>
                    2
                    
                  </span>
                </button>
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
