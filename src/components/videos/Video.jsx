import React from "react";

// internal import
import "./video.css";
import image from "../../assets/images/3.jpg";

export default function Video({ title, id, noq }) {
  return (
    <div className="video">
      <img
        // youtbe API to get vidoes thumbnile
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className="qmeta">
        <p>{noq} Questions</p>
        <p>Total Points : {noq * 5}</p>
      </div>
    </div>
  );
}
