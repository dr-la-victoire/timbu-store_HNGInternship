import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./Header";
import NavBar from "./Navbar";
import Brand from "./Brand";
import MainContent from "./MainContent";
import Checkout from "./Checkout";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const [cart, setCart] = useState([]); // State for the products
  const [counter, setCounter] = useState(0); // State for the counter for the cart
  const location = useLocation();
  //const [notification, setNotification] = useState(null);

  // function to handle the click event to add to cart
  function addToCart(product) {
    setCart([...cart, product]);
    setCounter(counter + 1);
    alert("Added to cart!");
    /*setNotification("Added to cart!");
    setTimeout(() => {
      setNotification(null);
    }, 1500);*/
  }

  const showBrandComponent = !location.pathname.startsWith("/checkout");

  return (
    <div className="container">
      <Header counter={counter} />
      <NavBar />
      {showBrandComponent && <Brand />}
      <Routes>
        <Route path="/" element={<MainContent addToCart={addToCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
