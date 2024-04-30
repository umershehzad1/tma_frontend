"use client";
import React from "react";
import Image from "next/image";
import { Card, Col, Row } from "react-bootstrap";
import customer from "@/assets/customer.png";
import customer2 from "@/assets/customer2.png";
import customer3 from "@/assets/customer3.png";
import customer4 from "@/assets/customer4.png";
import insta from "@/assets/insta.png";
import linkdin from "@/assets/linkdin.png";

const Team = () => {
  return (
   <>
    <Row style={{ backgroundColor: "#F2F2F2", color: "#1A1A1A", fontWeight: "600", fontSize: "48px" }} >
                <div className="text-center mt-5"> <h1 style={{ color: "#1A1A1A", fontWeight: "600", fontSize: "48px" }}>Our Awesome Team</h1>
                    <p style={{ color: "#666666", fontWeight: "400", fontSize: "14px" }}>Pellentesque a ante vulputate leo porttitor
                        luctus sed eget eros. Nulla et rhoncus <br /> neque. Duis non diam eget est luctus tincidunt a a mi.</p></div>
                <Col xs={6} lg={3}>
                    <Card >
                        <Image
                            src={customer}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="team"
                            style={{ width: "100%", height: "100%" }}


                        />
                        <Card.Body >
                            <div className="d-flex justify-content-between">
                                <div>
                                    <Card.Title style={{ color: "#1A1A1A", fontWeight: "500", fontSize: "18px" }}>Jenny Wison</Card.Title>
                                    <Card.Text>
                                        <div style={{ color: "#1A1A1A", fontWeight: "400", fontSize: "14px" }}>Ceo & Founder</div>


                                    </Card.Text>
                                </div>

                                <div>
                                    <div className="d-flex justify-content-end">
                                        <div>
                                            <Image
                                                src={insta}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                alt="team"
                                                style={{ backgroundColor: "#00283D", borderRadius: '500px' }}


                                            />
                                        </div>
                                        <div>
                                            <Image
                                                className="mx-2"
                                                src={linkdin}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                alt="team"
                                                


                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </Card.Body>
                    </Card>

                </Col>
                <Col xs={6} lg={3}>
                    <Card >
                        <Image
                            src={customer2}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="team"
                            style={{ width: "100%", height: "100%" }}


                        />
                        <Card.Body >
                            <div className="d-flex justify-content-between">
                                <div>
                                    <Card.Title style={{ color: "#1A1A1A", fontWeight: "500", fontSize: "18px" }}>Jane Cooper</Card.Title>
                                    <Card.Text>
                                        <div style={{ color: "#1A1A1A", fontWeight: "400", fontSize: "14px" }}>Worker</div>


                                    </Card.Text>
                                </div>

                                <div>
                                    <div className="d-flex justify-content-end">
                                        <div>
                                            <Image
                                                src={insta}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                alt="team"
                                                style={{ backgroundColor: "#00283D", borderRadius: '500px' }}


                                            />
                                        </div>
                                        <div>
                                            <Image
                                                className="mx-2"
                                                src={linkdin}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                alt="team"
                                                


                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </Card.Body>
                    </Card>

                </Col>


                <Col xs={6} lg={3}>
                    <Card >
                        <Image
                            src={customer3}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="team"
                            style={{ width: "100%", height: "100%" }}


                        />
                        <Card.Body >
                            <div className="d-flex justify-content-between">
                                <div>
                                    <Card.Title style={{ color: "#1A1A1A", fontWeight: "500", fontSize: "18px" }}>Cody Fisher</Card.Title>
                                    <Card.Text>
                                        <div style={{ color: "#1A1A1A", fontWeight: "400", fontSize: "14px" }}>Security Guard</div>


                                    </Card.Text>
                                </div>

                                <div>
                                    <div className="d-flex justify-content-end">
                                        <div>
                                            <Image
                                                src={insta}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                alt="team"
                                                style={{ backgroundColor: "#00283D", borderRadius: '500px' }}


                                            />
                                        </div>
                                        <div>
                                            <Image
                                                className="mx-2"
                                                src={linkdin}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                alt="team"
                                                


                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </Card.Body>
                    </Card>

                </Col>

                <Col xs={6} lg={3}>
                    <Card >
                        <Image
                            src={customer4}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="team"
                            style={{ width: "100%", height: "100%" }}


                        />
                        <Card.Body >
                            <div className="d-flex justify-content-between">
                                <div>
                                    <Card.Title style={{ color: "#1A1A1A", fontWeight: "500", fontSize: "18px" }}>Robert Fox</Card.Title>
                                    <Card.Text>
                                        <div style={{ color: "#1A1A1A", fontWeight: "400", fontSize: "14px" }}>Senior Farmer Manager</div>


                                    </Card.Text>
                                </div>

                                <div>
                                    <div className="d-flex justify-content-end">
                                        <div>
                                            <Image
                                                src={insta}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                alt="team"
                                                style={{ backgroundColor: "#00283D", borderRadius: '500px' }}


                                            />
                                        </div>
                                        <div>
                                            <Image
                                                className="mx-2"
                                                src={linkdin}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                alt="team"
                                                


                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </Card.Body>
                    </Card>

                </Col>


            </Row>
   </>
  )
}

export default Team
