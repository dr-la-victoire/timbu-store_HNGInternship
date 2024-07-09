import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Cookware
          </NavLink>
        </li>
        <li>
          <NavLink to="/kitchen" activeClassName="active">
            Kitchen appliances
          </NavLink>
        </li>
        <li>
          <NavLink to="/bakeware" activeClassName="active">
            Bakeware
          </NavLink>
        </li>
        <li>
          <NavLink to="/knives" activeClassName="active">
            Knives
          </NavLink>
        </li>
        <li>
          <NavLink to="/cutlery" activeClassName="active">
            Cutlery
          </NavLink>
        </li>
        <li>
          <HashLink smooth to="/#contact-us">
            Contact us
          </HashLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
