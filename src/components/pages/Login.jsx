import React from "react";
import "../../styles/login.css";
import Illustration from "../Illustration";
import loginImage from "../../assets/images/signup.svg";
import Form from "../Form";
import TextInput from "../TextInput";
import Button from "../Button";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration image={loginImage} />
        <Form className="login">
          <TextInput
            type="email"
            placeholder="Enter your email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <Button>
            <span> Submit now</span>
          </Button>
          <div className="info">
            Don't have an account? <a href="#">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
