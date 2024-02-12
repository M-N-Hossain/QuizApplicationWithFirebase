import React from "react";
import Answers from "../quiz/Answers";
import ProgressBar from "../quiz/ProgressBar";
import MiniPlayer from "../quiz/MiniPlayer";

export default function Quiz() {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
}
