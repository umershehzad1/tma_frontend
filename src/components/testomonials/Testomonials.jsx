"use client"
import React from 'react'
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import Vector from "@/assets/Vector.svg"
import person from "@/assets/person.png"
import Image from 'next/image'
import Rating from 'react-rating-stars-component';
import person2 from "@/assets/person2.png"
import person3 from "@/assets/person3.png"
import arrowcircle from "@/assets/arrowcircle.svg"
import arrowcircle1 from "@/assets/arrowcircle1.svg"
import "./Testomonials.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testomonials = () => {


  const testimonialData = [
    {
      id: 1,
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      name: "Robert Fox",
      role: "Customer",
      rating: 5,
      image: require("@/assets/person.png")
    },
    {
      id: 2,
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      name: "Dianne Russell",
      role: "Customer",
      rating: 5,
      image: require("@/assets/person2.png")
    },
    {
      id: 3,
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      name: "Eleanor Pena",
      role: "Customer",
      rating: 5,
      image: require("@/assets/person3.png")
    }


  ];










  var settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },

    ]
  };
  return (
    <div className='py-5' style={{ background: "#F2F2F2" }}>
      <Container  >
        <div className='  d-none d-md-block'>
          <div className='test' >
            <div><h1 style={{ color: "#1A1A1A" }}>Client Testomonials</h1></div>

            <div>
              <Button className='test-button  border-0'>
                <Image
                  src={arrowcircle}
                  width={45}
                  height={45}
                  style={{ marginLeft: "13px" }}
                />
              </Button>

              <Button className='test-button border-0'>
                <Image
                  src={arrowcircle1}
                  width={45}
                  height={45}
                  style={{ marginLeft: "13px" }}
                />
              </Button>

            </div>


          </div>
        </div>


        <Row >
          <Slider {...settings}>
            {testimonialData.map(testimonial => (


              <Col xs={11} lg={11} className='p-4'>
                <Card className='p-3 my-2' >
                  <Image
                    src={Vector}
                    width={40}
                    height={40}
                    style={{ marginLeft: "13px" }}
                  />
                  <Card.Body>
                    <Card.Text style={{ color: "#4D4D4D" }}>
                      {testimonial.text}
                    </Card.Text>

                    <Row>
                      <Col xs={7}>
                        <div className="d-flex">
                        <div>
                        <Image
                          src={testimonial?.image}
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className='ms-2 mt-1'>
                          <h4 style={{ color: "#1A1A1A", fontSize: "16px"}}>
                            {testimonial.name}
                            <p style={{ color: "#999999", fontSize: "14px" }}>{testimonial.role}</p>
                          </h4>
                        </div>
                        </div>
                      </Col>
                      <Col xs={5} >
                      <Rating
                            count={testimonial.rating}
                            size={20}
                            activeColor="#ffd700"
                            classNames='reviews-card-star ms-auto'
                          />
                      </Col>
                    </Row>

                  


                  </Card.Body>
                </Card>

              </Col>


            ))}








          </Slider>
        </Row>
      </Container>
    </div>
  )
}

export default Testomonials;


