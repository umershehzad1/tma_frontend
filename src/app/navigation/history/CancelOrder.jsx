"use client";
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import arrow from "@/assets/order-arrow.svg";
import Image from "next/image";

const CancelOrder = ({ show, handleClose }) => {
  return (
    <>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal size="md" show={show} onHide={handleClose}>
          <Modal.Header></Modal.Header>
          <Modal.Body>
            <Modal.Title className="text-center">
              <h1
                style={{
                  color: "#7D7D7D",
                  fontWeight: "600",
                  fontSize: "18px",
                  marginBottom: "1rem",
                }}
              >
                Do you want to cancel the Order{" "}
                <span
                  style={{
                    color: "#1A1A1A",
                    fontWeight: "600",
                    fontSize: "18px",
                    marginBottom: "2rem",
                  }}
                >
                  5951750 ?
                </span>
              </h1>
            </Modal.Title>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="order-no-button  border-0 text-center"
              style={{ backgroundColor: "#E3E3E3" }}
            >
              No
            </Button>
            <Button className="order-yes-button  border-0 text-center">
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default CancelOrder;
