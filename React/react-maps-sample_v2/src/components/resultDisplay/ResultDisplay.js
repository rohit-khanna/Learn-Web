import React from "react";
import "./ResultDisplay.css";

const ResultDisplay = ({ totalDistance, totalTime }) => {
  return (
    <div className="resultContainer">
      <div className="row">
        <div className="col-md-5 lbl-heading">Total Distance:</div>
        <div className="col-md-auto">{totalDistance}</div>
      </div>
      <div className="row">
        <div className="col-md-5 lbl-heading">Total Time:</div>
        <div className="col-md-auto">{totalTime}</div>
      </div>
    </div>
  );
};

export default ResultDisplay;
