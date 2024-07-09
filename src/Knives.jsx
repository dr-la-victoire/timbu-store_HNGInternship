import React from "react";
import MainContent from "./MainContent";

function Knives({ addToCart }) {
  return (
    <div className="knives">
      <MainContent addToCart={addToCart} heading={"Knives"} />
    </div>
  );
}

export default Knives;
