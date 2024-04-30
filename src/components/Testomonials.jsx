"use client"
import React from 'react'
import { Container,Col,Row,Card, Button} from 'react-bootstrap'
import Vector from "@/assets/Vector.svg"
import person from "@/assets/person.png"
import Image from 'next/image'
import Rating from 'react-rating-stars-component';
import person2 from "@/assets/person2.png"
import person3 from "@/assets/person3.png"
import arrowcircle  from "@/assets/arrowcircle.svg"
import arrowcircle1  from "@/assets/arrowcircle1.svg"
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const page = () => {
//   var settings = {
//     // dots: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     // autoplay: true,
//     // autoplaySpeed: 2000,
//     // cssEase: "linear"
// };
  return (
    <div className='py-5' style={{background:"#F2F2F2"}}>
      <Container  >
        <div className='test' >
          <div><h1 style={{color:"#1A1A1A"}}>Client Testomonials</h1></div>
        
        <div>
          <Button className='test-button  border-0'>
          <Image
          src={arrowcircle}
          width={45}
          height={45}
          style={{marginLeft:"13px"}}
        />
          </Button>

       <Button className='test-button border-0'>
       <Image
          src={arrowcircle1}
          width={45}
          height={45}
          style={{marginLeft:"13px"}}
        />
       </Button>
         
        </div>
       

        </div>
       
        <Row >
        {/* <Slider {...settings}> */}
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
      < h4 className='ms-2' style={{ color: "#1A1A1A", fontSize: "16px",marginRight:"73px" }}>
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
        {/* </Slider> */}
    </Row>  
  </Container>  
</div>
  )
}

export default page;


