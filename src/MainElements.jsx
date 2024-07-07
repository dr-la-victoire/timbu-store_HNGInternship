import React from "react";

function MainElements() {
  return (
    <div className="main-elements-container">
      <div className="card-colors">
        <p>Available in</p>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <div className="sizes">
        <div className="sizes-text">
          <p>Sizes in set</p>
          <p>12</p>
          <p>20</p>
          <p>24</p>
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default MainElements;
