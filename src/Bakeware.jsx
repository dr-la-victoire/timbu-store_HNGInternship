import React from "react";
import MainContent from "./MainContent";

function Bakeware({ addToCart }) {
  return (
    <div className="bakeware">
      <MainContent addToCart={addToCart} heading={"Bakeware"} />
    </div>
  );
}

export default Bakeware;
