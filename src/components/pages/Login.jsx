import React from "react";
import LoginForm from "../LoginForm";
import Illustration from "../Illustration";
import loginImage from "../../assets/images/signup.svg";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration image={loginImage} />
        <LoginForm />
      </div>
    </>
  );
}
