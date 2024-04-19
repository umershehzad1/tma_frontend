"use client";
import Image from "next/image";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import dash from "@/assets/dash.svg";

const Navigation = () => {
  return (
    <>
     <div className="navg p-3 mt-3">
    <div><h5 style={{ fontSize: "20px", fontWeight: "500", color:'#1A1A1A' }}>Navigation</h5></div> 
     <div className='d-flex mt-4'>
                    <div >
                      <Image src={dash} width={24} height={24} sizes='100vw' alt='product' />
                    </div>
                    <div className="ms-3 mt-1">
                      <h1 style={{ color: '#666666', fontWeight: '400', fontSize: '16px' }}>Dashboard</h1>
                    </div>
                  </div>

     </div>
    </>
  )
}

export default Navigation
