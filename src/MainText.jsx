import React from "react";

function MainText(props) {
  return (
    <div className="main-text">
      <h2>{props.heading}</h2>
      <div className="main-small">
        <p>6 items found</p>
      </div>
    </div>
  );
}

export default MainText;
