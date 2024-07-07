import React from "react";

function Header() {
  return (
    <header>
      <div className="header-left">
        <h1>CHEF</h1>
        <input placeholder="Search Products" />
      </div>
      <div className="header-icons">
        <p>person</p>
        <p>love</p>
        <p>cart</p>
      </div>
    </header>
  );
}

export default Header;
