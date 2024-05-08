import React from "react";
import style from "./ProgressBar.module.css";

const ProgressBar = () => {
  return (
    <div class="progressbar">
      <div class="progress" id="progress">1</div>
      <div class="progress-step progress-step-active">2</div>
      <div class="progress-step">3</div>
      <div class="progress-step">4</div>
    </div>
  );
};

export default ProgressBar;