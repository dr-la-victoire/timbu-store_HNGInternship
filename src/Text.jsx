import React from "react";

function Text(props) {
  return (
    <div className="main-elements">
      <div className="img-container">
        <img
          src={props.src}
          alt="Chef Store Equipment"
          style={{ height: "300px" }}
        />
      </div>
      <div className="card-text">
        <h3>{props.header}</h3>
        <h3>{props.price}</h3>
      </div>
      <p>
        This S-quart pot is crafted from high-quality durable materials that
        ensure even heat distribut...
      </p>
    </div>
  );
}

export default Text;
