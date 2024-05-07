"use client";
import React from "react";
import drink from "@/assets/drink.png";
import productimg from "@/assets/image.png";
import CategoryProductPage from "@/components/shared/categoryproductpage/CategoryProductPage";
import "./drink.css"

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
   <CategoryProductPage banner={drink} title={"Drink"} products={products}   />
   </>
  )
}

export default page
