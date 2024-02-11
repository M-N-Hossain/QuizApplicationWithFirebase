import React from "react";

import "../styles/illustration.css";

export default function Illustration({ image }) {
  return (
    <div className="illustration">
      <img src={image} alt="signup" />
    </div>
  );
}
