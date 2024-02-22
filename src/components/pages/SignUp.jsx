import React from "react";

import Illustration from "../Illustration";
import signUpImage from "../../assets/images/signup.svg";
import SignupForm from "../SignupForm";


export default function SignUp() {
  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration image={signUpImage} />
        <SignupForm />
      </div>
    </>
  );
}
