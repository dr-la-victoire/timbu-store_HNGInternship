import React from "react";
import MainContent from "./MainContent";

function Kitchen({ addToCart }) {
  return (
    <div className="kitchen">
      <MainContent addToCart={addToCart} heading={"Kitchen"} />
    </div>
  );
}

export default Kitchen;
