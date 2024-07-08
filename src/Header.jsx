import React from "react";

function Header() {
  return (
    <header>
      <div className="header-left">
        <h1>CHEF</h1>
        <input placeholder="Search Products" />
      </div>
      <div className="header-icons">
        <p><i class="fa-solid fa-user"></i></p>
        <p><i class="fa-solid fa-heart"></i></p>
        <p><i class="fa-solid fa-cart-shopping"></i></p>
      </div>
    </header>
  );
}

export default Header;
