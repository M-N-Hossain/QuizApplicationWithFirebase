import React from "react";

// internal import
import "../../styles/navbar.css";
import Account from "./Account";
import logo from "../../assets/images/logo-bg.png";
import { Link } from "react-router-dom";

export default function () {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/" className="brand">
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
