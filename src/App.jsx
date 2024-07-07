import React from "react";
import Header from "./Header";
import NavBar from "./Navbar";
import Brand from "./Brand";
import MainContent from "./MainContent";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <NavBar />
      <Brand />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
