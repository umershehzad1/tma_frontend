import React from "react";
import ViewAllHeading from "../viewallheading/ViewAllHeading";
import { Button, Col, Container, Row } from "react-bootstrap";
import Fruits from "@/assets/fruit.png";
import vegetable from "@/assets/vegetable.png";

import Meat from "@/assets/meatlarge.png";
import Cosmetics from "@/assets/cosmatics.png";
import Sale from "@/assets/sale.png";
import showmore from "@/assets/showmore.svg";
import Image from "next/image";
import Link from "next/link";
import "./newlyaddedmobile.css"
const imageMap = {
    Vegetables: { image: vegetable, link: "/vegetable" },
    Meat: { image: Meat, link: "/meat" },
    Cosmetics: { image: Cosmetics, link: "/cosmetic" },
    Sale: { image: Sale, link: "/sale" },
  };

const NewlyAddedMobile = () => {
    
  return (
    <>
    <Container className="d-block d-md-none">
    <ViewAllHeading
          title="Newly Added Products"
          viewAllLink="/categories"
        />
    <div className="d-flex overflow-auto">
    {Object.keys(imageMap).map((category, index) => (
               
               <div
                 className=" d-flex justify-content-center align-items-center mx-1"
                 style={{
                   backgroundImage: `url(${imageMap[category].image.src})`,
                   backgroundSize: "cover",
                   backgroundPosition: "center",
                   height: "200px",
                   minWidth:"185px",
                   borderRadius: "10px",
                   marginBottom: "20px",
                  
              
                  
                 }}
               >
                 <div className="text-center">
                   <h1 className="text-white" style={{ fontSize: "20px" }}>
                     {category}
                   </h1>
                   <Button className="newly-btn" as={Link} href={imageMap[category].link}>
                     Shop Now
                    
                   </Button>
                 </div>
               </div>
             
           ))}
    </div>
    </Container>
   
    
           
           
    
    </>
  );
};

export default NewlyAddedMobile;

