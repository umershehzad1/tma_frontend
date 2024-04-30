"use client";
import Image from "next/image";
import { Container, Col, Row } from "react-bootstrap";
import React from "react";
import { Button, Form } from "react-bootstrap";
import productImage from "@/assets/image.png";

const page = () => {
    const [selectedCategory, setSelectedCategory] = React.useState("");
  
  
    const categories = [
      { value: "credit", label: "Default Address" },
      { value: "paypal", label: "Default Address" },
    ];
    const handleRadioChange = (e) => {
      setSelectedCategory(e.target.value);
    };
  return (
 <>
  <Container>
    <Row>
        <Col xs={12} lg={8}>
        <h5 style={{fontSize:"24px", fontWeight:"500"}}>Shipping Information</h5>
        {categories.map((category) => (
          <div key={category.value} className="mb-3">
            <Form.Check className="address-checkbox"
              type="radio"
              value={category.value}
              checked={selectedCategory === category.value}
              onChange={handleRadioChange}
              label={<div> <span style={{fontSize:"14", fontWeight:"400", color:"#1A1A1A"}}>{category.label}</span>
             <div> <small style={{fontSize:"14", fontWeight:"400"}}>4140 Parl.......</small> </div>
              </div>}
            />
          </div>
        ))}
        <div>
          <Form.Check
            inline
            label="Save this information"
            name="group1"
            type={"checkbox"}
          />
        </div>
        <Button className="add-to-cart-button  border-0 my-2">
          Add New Address
        </Button>
        </Col>
    </Row>
  </Container>
       

       
        
      
      
 </>
  )
}

export default page
