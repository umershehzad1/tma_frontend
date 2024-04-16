"use client";
import Image from "next/image";
import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import productImage from "@/assets/image.png";
const OrderSummary = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const products = [
    {
      title: "Chinese Cabbage ",
      image: productImage,
      quantity: 1,
      price: 17.28,
    },
    {
      title: "Big Potatos",
      image: productImage,
      quantity: 2,
      price: 17.28,
    },
  ];
  const total = [
    {
      title: "Subtotal",
      amount: "N50",
    },
    {
      title: "Shipping",
      amount: "Free",
    },
  ];

  const categories = [
    { value: "credit", label: "Credit Card / Debit Card" },
    { value: "paypal", label: "Paypal" },
  ];
  const handleRadioChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <>
      <Card className="p-3 mt-3">
        <h5>Order Summary</h5>
        {products.map((product, index) => (
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div>
                <Image
                  src={product.image}
                  width={60}
                  height={60}
                  alt={"Product"}
                />
              </div>
              <div>
                <div>
                  <p className="m-3">
                    {product.title} {product.quantity}kg
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <p className="text-black mt-3 fw-semibold">N{product.price}</p>
              </div>
            </div>
          </div>
        ))}

        {total.map((total, index) => (
          <div
            className="d-flex justify-content-between pt-3 pb-2"
            style={{ borderBottom: "1px solid #E6E6E6" }}
          >
            <div>
              <p className="text-gray mt-1">{total.title}:</p>
            </div>
            <div>
              <p className="text-black ">{total.amount}</p>
            </div>
          </div>
        ))}
        <div className="d-flex justify-content-between pt-3 pb-2">
          <div>
            <p className="text-gray mt-1">Total:</p>
          </div>
          <div>
            <b className="text-black ">N31.28</b>
          </div>
        </div>
        <h5>Payment Method</h5>

        {categories.map((category) => (
          <div key={category.value} className="mb-3">
            <Form.Check
              type="radio"
              value={category.value}
              checked={selectedCategory === category.value}
              onChange={handleRadioChange}
              label={<span>{category.label}</span>}
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
        <Button className="add-to-cart-button w-100 border-0 my-2">
            Place Order
          </Button>
      </Card>
    </>
  );
};

export default OrderSummary;
