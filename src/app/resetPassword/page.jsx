"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from "react";
import { Card, Col, Container, Row, Form, InputGroup } from "react-bootstrap";
import "react-phone-number-input/style.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";
import AllBanner from "@/components/allbanner/AllBanner";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "@/app/firebase/config"; // Import your Firebase auth configuration
import { resetPassword } from '@/services/authentication/authentication-service';
import { sendPasswordResetEmail } from 'firebase/auth';

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  // Obtain verificationToken and email from query parameters or local storage
  const verificationToken = localStorage.getItem("verificationToken");
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const { password } = values;

      try {
        auth().updateUser(uid, {
            email: "modifiedUser@example.com",
            // phoneNumber: "+11234567890",
            emailVerified: true,
            password: "newPassword",
            displayName: "Jane Doe",
            photoURL: "http://www.example.com/12345678/photo.png",
            disabled: true
          })
            .then(function(userRecord) {
              // See the UserRecord reference doc for the contents of userRecord.
              console.log("Successfully updated user", userRecord.toJSON());
            })
            .catch(function(error) {
              console.log("Error updating user:", error);
            });
        sendPasswordResetEmail(auth, email)
        // const user = auth.currentUser;
        // console.log("userrr : ", user.updatePassword());
        // await user.updatePassword(password);

        // const updatedToken = await user.getIdToken();
        // const response = resetPassword({ email, password, verificationToken, updatedToken })
        // if (!response.ok) {
        //   throw new Error('Failed to update password on backend.');
        // }
        // formik.resetForm();
        // router.push("/signin");
      } catch (error) {
        console.error("Password update error:", error);
        toast.error("Failed to update password.");
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
                  <h1 className="mb-5">Create New Password</h1>
                </Card.Title>
                <Form onSubmit={formik.handleSubmit}>
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
                    Reset Password
                  </button>
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
