"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import AllBanner from "@/components/allbanner/AllBanner";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SiMinutemailer } from "react-icons/si";
import toast, { Toaster } from "react-hot-toast";
import { resetPassword, sendMail } from "@/services/authentication/authentication-service";
import { sendPasswordResetEmail } from "firebase/auth";
import  { auth } from "@/app/firebase/config";
const Page = () => {
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        // if(values){
        //     let sendMailPromise = sendMail(values);
        //     toast.promise(sendMailPromise, {
        //         loading: "Sending Mail...!",
        //         success: (response) => <b>🦄 {response.data.message}</b>,
        //         error: (error)=> <b>{error.error}</b>,
        //       });
        //       sendMailPromise.then(()=>{
        //         setTimeout(()=>{
        //            router.push(`/verifyOTP?email=${values.email}`);
        //             formik.resetForm();
        //         }, 2000)
        //       }).catch((error)=>{
        //         console.log(error);
        //       })
        //     }

        const email = values.email;
        sendPasswordResetEmail(auth, email).then((data)=>{
          console.log("Email Sent! : ", data);
          toast.success(`🦄 Email Sent to ${email}`);
            //     let sendMailPromise = resetPassword(values);
            // toast.promise(sendMailPromise, {
            //     loading: "Sending Mail...!",
            //     success: (response) => <b>🦄 {response.data.message}</b>,
            //     error: (error)=> <b>{error.error}</b>,
            //   });
            //   sendMailPromise.then(()=>{
            //     setTimeout(()=>{
            //        router.push(`/verifyOTP?email=${values.email}`);
            //         formik.resetForm();
            //     }, 2000)
            //   }).catch((error)=>{
            //     console.log(error);
            //   })
        }).catch((err)=>{
          toast.error(err.code);
        })
      } catch (error) {
        toast.error("🦄 Email  Failed!");
      }
    },
  });
  return (
    <>
      <AllBanner />
      <Toaster position="top-center" reverseOrder={false} />
      <Container className="py-5" style={{ paddingBottom: "60px" }}>
        <Row>
          <Col lg={5} className="mx-auto">
            <Card
              style={{
                boxShadow: "0px 0px 56px 0px #00260314",
                backgroundColor: "#FFFFFF",
              }}
              className="border-rounded"
            >
              <Card.Body>
                <Card.Title className="text-center">
                  <h1 className="mb-4" style={{ fontWeight: "bold" }}>
                    Forgot Password
                  </h1>
                </Card.Title>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      className={`p-3 ${
                        formik.touched.email && formik.errors.email
                          ? "is-invalid"
                          : ""
                      }`}
                      {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="invalid-feedback">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </Form.Group>
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "15px",
                      borderRadius: "5px",
                      border: "none",
                      backgroundColor: "#00283D",
                      color: "#FFFFFF",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    Send Mail <SiMinutemailer style={{marginLeft : "8px"}} size={20} />
                  </button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Page;
