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
import cart from "@/assets/Bag.svg";
import CartOverlay from "../../cartoverlay/CartOverlay";
import HeartOverlay from "../../heartoverlay/HeartOverlay";
import "./header.css";
import HeaderOverlay from "@/components/headeroverlay/HeaderOverlay";
function Header() {
  const [active, setActive] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleCartButtonClick = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleHeartButtonClick = () => {
    setShowHeart(true);
  };


  const handleCloseHeart = () => {
    setShowHeart(false);
  };

  const handleMenuButtonClick = () => {
    setShowMenu(true);
  };
  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const navItems = [
    { title: "All Products", href: "/allproducts" },
    { title: "Meat", href: "/meat" },
    { title: "Vegetables", href: "/vegetable" },
    { title: "Fish & Seafoods ", href: "/fishandseafood" },
    { title: "Grains & Flowers", href: "/grainandflower" },
    { title: "Breakfast", href: "/breakfast" },
    {
      title: "Others",
      items: [
        { title: "Seasoning & Oil", href: "/seasoningandoil" },
        { title: "Drinks", href: "/drink" },
        { title: "Snacks & Sweets", href: "/snackandsweet" },
        { title: "Pasta & Noodles", href: "/pastaandnoodle" },
        { title: "Canned Foods", href: "/cannedfood" },
        { title: "Cosmetics", href: "/cosmetic" },
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
              href="/signin"
              style={{ fontSize: "14px", color: "#666666" }}
            >
              Sign In
            </Link>
            <span
              className=" mx-2"
              style={{ fontSize: "14px", color: "#666666" }}
            >
              /
            </span>
            <Link
              className="text-decoration-none"
              href="/signup"
              style={{ fontSize: "14px", color: "#666666" }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </Container>
      <hr className="mt-2 mb-2" style={{ color: "#999999" }} />
      <Navbar expand="lg" expanded={false} collapaseOnSelect className="bg-transparent header">
        <Container className="pb-2">
          <Navbar.Brand as={Link} href="/">
            <Image src={logo} />
          </Navbar.Brand>
          <div className="d-block d-lg-none d-flex ms-auto">
          <div className="m-2" style={{ borderRight: "2px solid #cccccc" }}>
                <Button class="bg-transparent border-0 position-relative">
                  <Heart
                    width={24}
                    height={24}
                    className="mx-2 "
                    // class="bg-transparent border-0 "
                    // active={active}
                    onClick={handleHeartButtonClick}
                  />
                </Button>
              </div>
              <div className="mt-2">
                <Button
                  type="button"
                  class="bg-transparent border-0 position-relative"
                  onClick={handleCartButtonClick}
                >
                  <Image src={cart} />
                  <span
                    class="position-absolute top-30 start-5 translate-middle badge rounded-pill"
                    style={{ background: "rgb(11, 47, 75)" }}
                  >
                    2
                  </span>
                </Button>
              </div>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" onClick={handleMenuButtonClick} />
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
                          style={
                            subIndex === 4
                              ? {}
                              : { borderBottom: "1px solid #7F7F7F" }
                          }
                          className="py-3"
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
            
          </Navbar.Collapse>
          <Form className="d-flex searchbar-outer">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 "
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

             
              <div className="m-2 d-none d-md-block" style={{ borderRight: "2px solid #cccccc" }}>
                <Button class="bg-transparent border-0 position-relative">
                  <Heart
                    width={24}
                    height={24}
                    className="mx-2 "
                    // class="bg-transparent border-0 "
                    // active={active}
                    onClick={handleHeartButtonClick}
                  />
                </Button>
              </div>
              <div className="mt-2 d-none d-md-block">
                <Button
                  type="button"
                  class="bg-transparent border-0 position-relative"
                  onClick={handleCartButtonClick}
                >
                  <Image src={cart} />
                  <span
                    class="position-absolute top-30 start-5 translate-middle badge rounded-pill"
                    style={{ background: "rgb(11, 47, 75)" }}
                  >
                    2
                  </span>
                </Button>
              </div>
           
            </Form>
        </Container>
      </Navbar>

      <CartOverlay isOpen={showCart} onClose={handleCloseCart} />
      <HeartOverlay isOpen={showHeart} onClose={handleCloseHeart} />
      <HeaderOverlay isOpen={showMenu} onClose={handleCloseMenu}/>

    </>
  );
}

export default Header;
