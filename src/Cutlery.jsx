import React from "react";
import MainContent from "./MainContent";

function Cutlery({ addToCart }) {
  return (
    <div className="cutlery">
      <MainContent addToCart={addToCart} heading={"Cutlery"} />
    </div>
  );
}

export default Cutlery;
