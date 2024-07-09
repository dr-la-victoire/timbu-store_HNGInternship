import React from "react";

function Checkout({ cart }) {
  const totalPrice = cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);

  function checkoutAlert() {
    alert("Checked out successfully!");
  }

  function applyCode() {
    alert("Promo code applied!");
  }

  /*const totalItem = cart.reduce((accumulator, currentItem) => {
    return acc
  })*/

  return (
    <div className="checkout-container">
      <main>
        <div className="main-text">
          <h2>Cart Items</h2>
        </div>
        <div className="cart-content">
          <div className="product">
            {cart.length === 0 ? (
              <p>Your cart is empty!</p>
            ) : (
              <ul className="cart-list">
                {cart.map((item, index) => (
                  <li key={index} className="cart-item">
                    <div className="cart-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cart-desc">
                      <p>{item.name}</p>
                      <p>{`N${item.price}`}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="order">
            <table>
              <tr>
                <td>
                  <h2>Order Summary</h2>
                </td>
                <td>
                  <h2>{cart.length} Items</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Subtotal</p>
                </td>
                <td>
                  <p>{`N${totalPrice}`}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Shipping</p>
                </td>
                <td>
                  <p>Calculated at checkout</p>
                </td>
              </tr>
              <tr>
                <td className="total">
                  <p>Total</p>
                </td>
                <td className="total">
                  <p>{`N${totalPrice}`}</p>
                </td>
              </tr>
            </table>
            <div className="promo-code">
              <input placeholder="Promo code" />
              <button onClick={() => applyCode()}>Apply</button>
            </div>
            <button className="checkout-button" onClick={() => checkoutAlert()}>
              Checkout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Checkout;
