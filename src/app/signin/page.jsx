"use client";

import React, { useState, useEffect, useLayoutEffect } from "react";
import { useRouter } from 'next/navigation';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Card from "react-bootstrap/Card";
import { BsGoogle } from "react-icons/bs";
import Link from "next/link";
import AllBanner from "@/components/allbanner/AllBanner";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from '@/app/firebase/config';
import { userLogin, loginWithGoogle } from "@/services/authentication/authentication-service";
import toast, { Toaster } from "react-hot-toast";
import "./signin.css";
import { getCookie, setCookie } from '../../utils/cookie';
import { AuthVerify } from "@/utils/auth.utils";
import cookies from 'js-cookie';
import { useDispatch } from "react-redux";
const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const { email, password } = values;
        const res = await signInWithEmailAndPassword(email, password);
        if (res && res.user) {
          const idToken = await res.user.getIdToken();
          const data = { token: idToken };
          let loginPromise = dispatch(userLogin(data));
          toast.promise(loginPromise, {
            loading: "Logging in...",
            success: (response) => <b>🎉 {response.message}</b>,
            error: (error) => <b>{error.error}</b>,
          });
          loginPromise
            .then( (response) => {
              // localStorage.setItem("token", response.data);
              const token = response.token;
              cookies.set('token', token, { expires: 1 })
              setTimeout(() => {
                router.push("/");
              }, 1000);
            })
            .catch((error) => {
              console.error("Login error:", error);
              toast.error("Login failed");
            });
        } else {
          toast.error("Invalid Credentials.");
        }
      } catch (error) {
        console.error("Sign in error:", error);
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      if (res && res.user) {
        const idToken = await res.user.getIdToken();
        const data = { token: idToken };

        // Call your backend API to handle Google Sign-In
        const response = await dispatch(loginWithGoogle(data));

        if (response && response.token) {
          toast.success("Login successful...!");
          const token = response.token;
          cookies.set('token', token, { expires: 1 })
          // localStorage.setItem('token', response.token);
          setTimeout(() => {
            router.push("/");
          });
        }
         else {
          console.error("Google Sign-In failed:", response ? response.error : "Unknown error");
          toast.error("Google Sign-In failed");
        }
      } else {
        console.error("Google Sign-In failed.");
        toast.error("Google Sign-In failed");
      }
    } catch (error) {
      console.error("Google Sign-In error:", error);
      toast.error("Google Sign-In error");
    }
  };

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
                    Sign In
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
                  <InputGroup className="mb-3">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      className={`p-3 ${
                        formik.touched.password && formik.errors.password
                          ? "is-invalid"
                          : ""
                      }`}
                      {...formik.getFieldProps("password")}
                    />
                    <InputGroup.Text
                      id="basic-addon1"
                      style={{
                        backgroundColor: "transparent",
                        borderLeft: "none",
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </InputGroup.Text>
                    {formik.touched.password && formik.errors.password ? (
                      <div className="invalid-feedback">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </InputGroup>
                  <Row className="my-3">
                    <Col xs={6} lg={6}>
                      <div>
                        <Form.Check.Input
                          style={{ padding: "10px", border: "2px solid gray" }}
                        />
                        <Form.Check.Label
                          style={{
                            textAlign: "center",
                            paddingLeft: "5px",
                            paddingTop: "3px",
                            color: "#666666",
                            fontSize: "10px",
                            fontWeight: "400",
                          }}
                        >
                          Remember me
                        </Form.Check.Label>
                      </div>
                    </Col>
                    <Col xs={6} lg={6} className="mt-2">
                    
                      <p
                        style={{
                          textAlign: "end",
                          color: "#666666",
                          fontSize: "10px",
                          fontWeight: "400",
                        }}
                      >
                        
                         <Link
                      href={"/forgotPassword"}
                      className="ms-2"
                      style={{ color: "#1A1A1A", fontSize: "14px" }}
                    >
                      forgot Pasword
                    </Link>
                      </p>
                    </Col>
                  </Row>
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
                    Login
                  </button>
                  <button
                    className="mt-3"
                    type="button"
                    onClick={signInWithGoogle}
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
                    Sign In with <BsGoogle />{" "}
                  </button>
                  <div className="d-flex justify-content-center mt-4">
                    <p style={{ color: "#666666", fontSize: "14px" }}>
                      Don't have an account?
                    </p>
                    <Link
                      href={"/signup"}
                      style={{ color: "#1A1A1A", fontSize: "14px" }}
                    >
                      Register
                    </Link>
                  </div>
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
