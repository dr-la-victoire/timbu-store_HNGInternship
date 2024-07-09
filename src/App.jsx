import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./Header";
import NavBar from "./Navbar";
import Bakeware from "./Bakeware";
import Cutlery from "./Cutlery";
import Kitchen from "./Kitchen";
import Knives from "./Knives";
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
  }

  /* function to handle the click event to delete from cart
  function removeFromCart(cart) {

  }*/

  const showBrandComponent = !location.pathname.startsWith("/checkout");

  return (
    <div className="container">
      <Header counter={counter} />
      <NavBar />
      {showBrandComponent && <Brand />}
      <Routes>
        <Route
          path="/"
          element={<MainContent addToCart={addToCart} heading={"Cookware"} />}
        />
        <Route path="/bakeware" element={<Bakeware addToCart={addToCart} />} />
        <Route path="/cutlery" element={<Cutlery addToCart={addToCart} />} />
        <Route path="/kitchen" element={<Kitchen addToCart={addToCart} />} />
        <Route path="/knives" element={<Knives addToCart={addToCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
