import React, { useState } from "react";
import Header from "./Header";
import NavBar from "./Navbar";
import Brand from "./Brand";
import MainContent from "./MainContent";
import Footer from "./Footer";

function App() {
  const [cart, setCart] = useState([]); // State for the products
  const [counter, setCounter] = useState(0); // State for the counter for the cart

  // function to handle the click event to add to cart
  function addToCart(product) {
    setCart([...cart, product]);
    setCounter(counter + 1);
  }

  return (
    <div className="container">
      <Header counter={counter} />
      <NavBar />
      <Brand />
      <MainContent addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;
