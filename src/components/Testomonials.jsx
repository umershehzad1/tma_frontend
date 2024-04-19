"use client"
import React from 'react'
import { Container,Col,Row,Card} from 'react-bootstrap'
import Vector from "@/assets/Vector.svg"
import person from "@/assets/person.png"
import Image from 'next/image'
import Rating from 'react-rating-stars-component';
import person2 from "@/assets/person2.png"
import person3 from "@/assets/person3.png"
const page = () => {
  return (
    <div className='py-5' style={{background:"#F2F2F2"}}>
      <Container  >
        <h1 style={{color:"#1A1A1A"}}>Client Testomonials</h1>
        <Row >
            <Col lg= {4} >
            <Card className='p-3' >
            <Image
          src={Vector}
          width={40}
          height={40}
          style={{marginLeft:"13px"}}
        />
      <Card.Body>
        <Card.Text style={{color:"#4D4D4D"}}>
        Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget
        </Card.Text>

    <div style={{ display: "flex", justifyContent:"space-evenly"}}>
  <div>
    <Image
      src={person}
      width={60}
      height={60}
    />
  </div>
  <div style={{ display: "flex", }}>
    <div>
      <h4 style={{ color: "#1A1A1A", fontSize: "16px",marginRight:"73px" }}>
        Robert Fox
        <p style={{ color: "#999999", fontSize: "14px" }}>Customer</p>
      </h4>
    </div>
    <div>
      <Rating
        count={5}
        size={24}
        activeColor="#ffd700"
      />
    </div>
  </div>
</div>


  </Card.Body>
</Card>

        </Col>
        
        <Col lg= {4}>
        
        <Card className='p-3' >
        <Image
      src={Vector}
      width={40}
      height={40}
      style={{marginLeft:"13px"}}
    />
  <Card.Body>
    <Card.Text style={{color:"#4D4D4D"}}>
    Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget
    </Card.Text>

    <div style={{ display: "flex", justifyContent:"space-evenly"}}>
  <div>
    <Image
      src={person2}
      width={60}
      height={60}
    />
  </div>
  <div style={{ display: "flex", }}>
    <div>
      <h4 style={{ color: "#1A1A1A", fontSize: "16px",marginRight:"73px" }}>
      Dianne Russell           
       <p style={{ color: "#999999", fontSize: "14px" }}>Customer</p>
      </h4>
    </div>
    <div>
      <Rating
        count={5}
        size={24}
        activeColor="#ffd700"
      />
    </div>
  </div>
</div>


  </Card.Body>
</Card>

        
        </Col>
        
        <Col lg= {4}>
        
        <Card className='p-3' >
        <Image
      src={Vector}
      width={40}
      height={40}
      style={{marginLeft:"13px"}}
    />
  <Card.Body>
    <Card.Text style={{color:"#4D4D4D"}}>
    Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget
    </Card.Text>

    <div style={{ display: "flex", justifyContent:"space-evenly"}}>
  <div>
    <Image
      src={person3}
      width={60}
      height={60}
    />
  </div>
  <div style={{ display: "flex", }}>
    <div>
      <h4 style={{ color: "#1A1A1A", fontSize: "16px",marginRight:"73px" }}>
      Eleanor Pena           
     <p style={{ color: "#999999", fontSize: "14px" }}>Customer</p>
      </h4>
    </div>
    <div>
      <Rating
        count={5}
        size={24}
        activeColor="#ffd700"
      />
    </div>
  </div>
</div>


  </Card.Body>
</Card>

        </Col>
    </Row>  
  </Container>  
</div>
  )
}

export default page