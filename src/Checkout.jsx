import React from "react";

function Checkout({ cart }) {
  return (
    <div className="checkout-container">
      <main>
        <div className="main-text">
          <h2>Cart Items</h2>
        </div>
        <div className="cart-content">
          {cart.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
