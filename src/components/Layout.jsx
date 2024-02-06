// external import
import React from "react";

// internal import
import Navbar from "./navbar/nav/Navbar";
import "../globalStyles/layout.css";

export default function ({ children }) {
  return (
    <>
      <Navbar />
      <main className="main">
        <div className="container">{children}</div>
      </main>
    </>
  );
}
