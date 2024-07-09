import React from "react";

function MainElements({ addToCart, product }) {
  return (
    <div className="main-elements-container">
      <div className="available-colours">
        <div className="available">
          <p>Available colors</p>
        </div>
      </div>
      <div className="sizes">
        <div className="size-text">
          <div className="paragraph">
            <p>Sizes in set</p>
          </div>
          <div className="size-values">
            <p>12</p>
            <p>20</p>
            <p>24</p>
          </div>
        </div>
        <button onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </div>
  );
}

export default MainElements;
