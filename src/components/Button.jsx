import React from "react";

import "../styles/button.css";

export default function Button({ className, children }) {
  return <button className={`button ${className}`}>{children} </button>;
}
