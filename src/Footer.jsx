import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="footer-link-list">
          <ul>
            <li>
              <h1>CHEF</h1>
            </li>
            <li>Kitchen appliances</li>
            <li>Cookware</li>
            <li>Bakeware</li>
            <li>Knives</li>
            <li>Cutlery</li>
            <li>Contact us</li>
          </ul>
          <div className="footer-button">
            <button>Sign up</button>
          </div>
        </div>

        <div className="footer-contact">
          <div className="footer-image">
            <p>Insert</p>
          </div>
          <div className="contact">
            <h5>Contact</h5>
            <p>+948-924-567-77-642</p>
          </div>
          <div className="email">
            <h5>Email</h5>
            <p>Chefworld@gmail.com</p>
          </div>
          <div className="address">
            <h5>Address</h5>
            <p>41 plot 5, Port-Harcourt, Nigeria</p>
          </div>
        </div>
        <div className="footer-end">
          <p>&copy; 2023</p>
          <p>Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
