import React from "react";
import './style.css'

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center"}}
      className="jumbotron"
    >
      <h1 className="jumboText">Welcome to Brew Finder</h1>
    </div>
  );
}

export default Jumbotron;
