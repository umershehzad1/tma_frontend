"use client";
import { useRouter } from 'next/navigation'
import React, { useState, useEffect, useLayoutEffect } from "react";
import { Card, Col, Container, Row, Form, InputGroup } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { BsGoogle } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import AllBanner from "@/components/allbanner/AllBanner";
import { signupWithGoogle, userRegister } from "../../services/authentication/authentication-service";
import toast, { Toaster } from "react-hot-toast";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthVerify } from "@/utils/auth.utils";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState("user"); // Default role is "user"
  const router = useRouter();
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(4, "Name must be at least 4 characters long."),
    contactNumber: Yup.string().required("Contact Number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      contactNumber: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const { name, contactNumber, email, password } = values;
        const res = await createUserWithEmailAndPassword(email, password);
        
        if (res && res.user) {
          const idToken = await res.user.getIdToken();
          
          const data = {
            token: idToken,
            name,
            contactNumber,
            role, 
          };
          let registerPromise = userRegister(data);
          toast.promise(registerPromise, {
            loading: "Registering...!",
            success: (response) => `🦄 ${response.message}!`,
            error: (error) => {
              if (error.message === "EMAIL_EXISTS") {
                return "Email already exists. Please use a different email.";
              } else {
                return error.error;
              }
            },
          });
          registerPromise
            .then(() => {
              setTimeout(() => {
                router.push("/signin");
                formik.resetForm();
              }, 2000);
            })
            .catch((error) => {
              toast.error(error.message);
            });
        } else {
          toast.error("Email Already Exist. Please try another.");
        }
      } catch (error) {
        console.error("Sign up error:", error);
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleGoogleSignUp = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);
      
      if (res && res.user) {
        const { displayName, email } = res.user;
        const token = await res.user.getIdToken();
        const data = {
          token,
          name: displayName,
          email,
          role, 
        };
  
        let registerPromise = signupWithGoogle(data);
  
        toast.promise(registerPromise, {
          loading: "Registering...!",
          success: (response) => `🦄 ${response.message}!`,
          error: (error) =>  <b>{error.message}</b>
        });
  
        registerPromise.then(() => {
          setTimeout(() => {
            router.push("/signin");
            formik.resetForm();
          }, 2000);
        }).catch((error) => {
          console.log("Error: ", error);
         
        });
      }
    } catch (error) {
      console.error("Google sign-up error:", error);
      toast.error("Failed to sign up with Google.");
    }
  };
  
  const handleRoleToggle = () => {
    setRole((prevRole) => (prevRole === "user" ? "wholesaler" : "user"));
  };

  return (
    <div>
      <AllBanner />
      <Toaster position="top-center" reverseOrder={false} />
      <Container className="py-5">
        <Row>
          <Col lg={5} className="mx-auto px-auto">
            <Card
              style={{
                boxShadow: "0px 0px 56px 0px #00260314",
                backgroundColor: "#FFFFFF",
              }}
              className="border-rounded"
            >
              <Card.Body>
                <Card.Title className="text-center">
                  <h1>Create Account</h1>
                </Card.Title>
                <Form onSubmit={formik.handleSubmit}>
                  <div className="number mt-4">
                    <PhoneInput
                      placeholder="Enter phone number"
                      defaultCountry="US"
                      {...formik.getFieldProps("contactNumber")}
                      value={formik.values.contactNumber}
                      onChange={(value) =>
                        formik.setFieldValue("contactNumber", value)
                      }
                      className={`form-control ${
                        formik.touched.contactNumber &&
                        formik.errors.contactNumber
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    {formik.touched.contactNumber &&
                    formik.errors.contactNumber ? (
                      <div className="invalid-feedback">
                        {formik.errors.contactNumber}
                      </div>
                    ) : null}
                  </div>

                  <Form.Group className="mb-3 mt-4" controlId="name">
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      {...formik.getFieldProps("name")}
                      className={`form-control ${
                        formik.touched.name && formik.errors.name
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div className="invalid-feedback">
                        {formik.errors.name}
                      </div>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3 mt-4" controlId="email">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      {...formik.getFieldProps("email")}
                      className={`form-control ${
                        formik.touched.email && formik.errors.email
                          ? "is-invalid"
                          : ""
                      }`}
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
                      {...formik.getFieldProps("password")}
                      className={`form-control ${
                        formik.touched.password && formik.errors.password
                          ? "is-invalid"
                          : ""
                      }`}
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

                  <InputGroup className="mb-3">
                    <Form.Control
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      {...formik.getFieldProps("confirmPassword")}
                      className={`form-control ${
                        formik.touched.confirmPassword &&
                        formik.errors.confirmPassword
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    <InputGroup.Text
                      id="basic-addon2"
                      style={{
                        backgroundColor: "transparent",
                        borderLeft: "none",
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                    </InputGroup.Text>
                    {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword ? (
                      <div className="invalid-feedback">
                        {formik.errors.confirmPassword}
                      </div>
                    ) : null}
                  </InputGroup>
                  
                  <Form.Check.Input
                    style={{ padding: "10px", border: "2px solid gray" }}
                  />
                  <Form.Check.Label
                    style={{
                      textAlign: "center",
                      paddingLeft: "5px",
                      paddingTop: "3px",
                      color: "#666666",
                    }}
                  >
                    Accept all terms & Conditions
                  </Form.Check.Label>

                  <Form.Check 
                    type="switch"
                    id="role-switch"
                    label="Register as wholesaler"
                    checked={role === "wholesaler"}
                    onChange={handleRoleToggle}
                    className="mt-3"
                  />

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
                    className="mt-3"
                  >
                    Sign Up
                  </button>

                  <button
                    type="button"
                    className="mt-3"
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
                    onClick={handleGoogleSignUp}
                  >
                    Sign Up with <BsGoogle />
                  </button>

                  <div className="d-flex justify-content-center mt-4">
                    <p style={{ color: "#666666", fontSize: "14px" }}>
                      Already have an account
                    </p>
                    <Link
                      href={"/signin"}
                      className="ms-2"
                      style={{ color: "#1A1A1A", fontSize: "14px" }}
                    >
                      Login
                    </Link>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page;
