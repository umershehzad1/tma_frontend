"use client";
import React from "react";
import seafood from "@/assets/seafood.png";
import productimg from "@/assets/image.png";
import CategoryProductPage from "@/components/shared/categoryproductpage/CategoryProductPage";
import "./fishandfood.css"

const page = () => {
    const products = [
        {
          sale: "50",
          title: "Big Potatos",
          productImage: productimg,
          price: 14.9,
          Oldprice: 16,
        },
        {
          sale: "50",
          title: "Big Potatos",
          productImage: productimg,
          price: 14.9,
          Oldprice: 16,
        },
        {
          title: "Big Potatos",
          productImage: productimg,
          price: 14.9,
          Oldprice: 16,
        },
        {
          sale: "30",
          title: "Big Potatos",
          productImage: productimg,
          price: 14.9,
          Oldprice: 16,
        },
        {
            sale: "50",
            title: "Big Potatos",
            productImage: productimg,
            price: 14.9,
            Oldprice: 16,
          },
          {
            sale: "10",
            title: "Big Potatos",
            productImage: productimg,
            price: 14.9,
            Oldprice: 16,
          },
      ];
  return (
   <>
   <CategoryProductPage banner={seafood} title={"Fish and Seafood"} products={products}   />
   </>
  )
}

export default page
