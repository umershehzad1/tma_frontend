"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button, Col, Row } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import productImage from "@/assets/image.png";
import closebtn from "@/assets/cancelproduct.svg";
import Filter from "./shared/Filter";

const FilterOverlay = ({ isOpen, onClose }) => {
    const [count, setCount] = React.useState(0);
    const handleClose = () => {
        if (onClose) {
          onClose();
        }
      };
      const incNum = () => {
        setCount(count + 1);
      };
    
      const decNum = () => {
        if (count > 0) {
          setCount(count - 1);
        } else {
          setCount(0);
        }
      };
    
      const products = [
        {
          title: "Big Potatos",
          Image: productImage,
          amount: 2,
          price: 17.28,
        },
        {
          title: "Big Potatos",
          Image: productImage,
          amount: 2,
          price: 17.28,
        },
        
        
        
      ];
  return (
    <>
     <Offcanvas placement="end" show={isOpen} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            
          <Filter/>
         
        </Offcanvas.Body>
      </Offcanvas>

    </>
   
  )
}

export default FilterOverlay
