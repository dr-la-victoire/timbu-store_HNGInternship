import React from "react";
import MainElements from "./MainElements";

function Text(props) {
  return (
    <div className="main-elements">
      <img src={props.src} alt="Chef Store Equipment" />
      <div className="card-text">
        <h3>{props.header}</h3>
        <h3>{props.price}</h3>
      </div>
      <p>
        This S-quart pot is crafted from high-quality durable materials that
        ensure even heat distribut...
      </p>
      <MainElements />
    </div>
  );
}

export default Text;
