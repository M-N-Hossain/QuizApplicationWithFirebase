import React from "react";

// internal import
import "./videos.css";
import Video from "./Video";
import { Link } from "react-router-dom";

export default function Videos() {
  return (
    <div className="videos">
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
    </div>
  );
}
