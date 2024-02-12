import React from "react";

import "../styles/button.css";

export default function Button({ className, children }) {
  return <div className={`button ${className}`}>{children} </div>;
}
