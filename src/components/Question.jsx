import React from "react";
// internal import
import "../styles/question.css";
import Answers from "./quiz/Answers";

export default function Question() {
  return (
    <div class="question">
      <div class="qtitle">
        <span class="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answers />
    </div>
  );
}
