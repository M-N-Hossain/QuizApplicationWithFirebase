import React from "react";

import "../../styles/signUp.css";
import Form from "../Form";
import TextInput from "../TextInput";
import CheckBox from "../CheckBox";
import Button from "../Button";
import Illustration from "../Illustration";
import signUpImage from "../../assets/images/signup.svg";

export default function SignUp() {
  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration image={signUpImage} />
        <Form className="signup">
          <TextInput type="text" placeholder="Enter your name" icon="person" />
          <TextInput
            type="email"
            placeholder="Enter your email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <CheckBox text="I agree to the Terms &amp; Conditions" />
          <Button>Submit now</Button>
          <div className="info">
            Already have an account? <a href="#">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
