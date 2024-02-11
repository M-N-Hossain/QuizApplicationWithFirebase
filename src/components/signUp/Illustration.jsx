import React from "react";

import "../../styles/illustration.css";
import signUpImage from "../../assets/images/signup.svg";

export default function Illustration() {
  return (
    <div className="illustration">
      <img src={signUpImage} alt="signup" />
    </div>
  );
}
