"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import AllBanner from "@/components/allbanner/AllBanner";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { CiUnlock } from "react-icons/ci";
import { verifyOTP } from "@/services/authentication/authentication-service";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  console.log("Email  : ", email);

  const validationSchema = Yup.object().shape({
    otp: Yup.string().required("OTP is required"),
  });

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        values = { ...values, email: email };
        if (values) {
          let verifyOTPPromise = verifyOTP(values);
          
          toast.promise(verifyOTPPromise, {
            loading: "Verifying OTP...!",
            success: (response) => <b> 🦄 {response.data.message}</b>,
            error: (error) => <b> {error.error}</b>,
          });
          verifyOTPPromise
            .then((res) => {
              localStorage.setItem("verificationToken", res.data.verificationToken);
              setTimeout(() => {
                localStorage.removeItem("verificationToken");
              }, 15 * 60 * 1000);
                setTimeout(() => {
                    router.push(`/resetPassword?email=${email}`);
                    formik.resetForm();
                }, 2000);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } catch (error) {
        toast.error("🦄 Failed to verify OTP");
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
                    Verify OTP
                  </h1>
                </Card.Title>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Group className="mb-3" controlId="otp">
                    <Form.Control
                      type="text"
                      placeholder="Enter OTP"
                      className={`p-3 ${
                        formik.touched.otp && formik.errors.otp
                          ? "is-invalid"
                          : ""
                      }`}
                      {...formik.getFieldProps("otp")}
                    />
                    {formik.touched.otp && formik.errors.otp ? (
                      <div className="invalid-feedback">
                        {formik.errors.otp}
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
                    Verify OTP <CiUnlock style={{ marginLeft: "8px" }} size={20} />
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
