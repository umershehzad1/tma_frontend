"use client";
import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import ModalPurchase from "../modalpurchase/ModalPurchase";
import "./carttotal.css"

const CartTotal = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const total = [
    {
      title: "Subtotal",
      amount: "N31.28",
    },
    {
      title: "Shipping",
      amount: "Free",
    },
  ];
  return (
    <>
      <Card className="p-3 mt-3" >
        <h5 style={{ fontSize: "20px", fontWeight: "500", color: '#1A1A1A' }}>Cart Total</h5>
        {total.map((total, index) => (
          <div
            className="d-flex justify-content-between pt-3 "
            style={{ borderBottom: "1px solid #E6E6E6" }}
          >
            <div>
              <p className="text-gray mt-1">{total.title}:</p>
            </div>
            <div>
              <p style={{ fontSize: "14px", fontWeight: "500", color: '#1A1A1A' }}>{total.amount}</p>
            </div>
          </div>
        ))}
        <div className="d-flex justify-content-between pt-3 ">
          <div>
            <p className="text-gray mt-1">Total:</p>
          </div>
          <div>
            <b className="text-black ">N31.28</b>
          </div>
        </div>
        <Button className="add-to-cart-button w-100 border-0 my-2" onClick={handleShowModal}>
          Proceed to checkout
        </Button>
      </Card>
      <ModalPurchase show={showModal} handleClose={handleCloseModal} />

    </>
  )
}

export default CartTotal
