"use client";
import React from "react";
import Link from "next/link";
import { Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import "./headeroverlay.css"
const HeaderOverlay = ({ isOpen, onClose }) => {

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    const items = [
        { title: "All Products", href: "/allproducts" },
        { title: "Meat", href: "/meat" },
        { title: "Vegetables", href: "/vegetable" },
        { title: "Fish & Seafoods", href: "/fishandseafood" },
        { title: "Grains & Flowers", href: "/grainandflower" },
        { title: "Breakfast", href: "/breakfast" },
        { title: "Seasoning & Oil", href: "/seasoningandoil" },
        { title: "Drinks", href: "/drink" },
        { title: "Snacks & Sweets", href: "/snackandsweet" },
        { title: "Pasta & Noodles", href: "/pastaandnoodle" },
        { title: "Canned Foods", href: "/cannedfood" },
        { title: "Cosmetics", href: "/cosmetic" },
    ];

    return (
        <Offcanvas placement="end" show={isOpen} onHide={handleClose} style={{ width: "300px" }}>
            <Offcanvas.Header closeButton />
            <Offcanvas.Body className="px-0 py-3">

                {items.map((item, index) => (
                    <div className="">
                        <Link href={item.href} key={index} className="mt-2 text-decoration-none px-3" style={{ color: "#4D4D4D" }}>
                            {item.title}
                        </Link>
                        <hr />
                    </div>

                ))}

            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default HeaderOverlay;
