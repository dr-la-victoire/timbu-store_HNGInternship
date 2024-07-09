import React from "react";
import { Link } from "react-router-dom";
import MainText from "./MainText";
import Text from "./Text";
import StainlessSteelPots from "./Images/stainless-steel-pots.jpg";
import BlueFryingPan from "./Images/blue-frying-pan.jpg";
import TransparentKettle from "./Images/transparent-kettle.jpg";
import WoodenShelvesPots from "./Images/wooden-shelves-pots.jpg";
import BronzePans from "./Images/bronze-pans.jpg";
import OpenPot from "./Images/open-pot.jpg";
import MainElements from "./MainElements";

const MainContent = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: "Classic Non-Stick Set",
      price: "N190,000",
      image: StainlessSteelPots,
    },
    {
      id: 2,
      name: "Stain-Free Frying Pan",
      price: "N90,000",
      image: BlueFryingPan,
    },
    {
      id: 3,
      name: "Transparent Kettle",
      price: "N100,000",
      image: TransparentKettle,
    },
    {
      id: 4,
      name: "Superior Non-Stick Set",
      price: "N290,000",
      image: WoodenShelvesPots,
    },
    { id: 5, name: "Non-Rust Frying Pan", price: "N80,000", image: BronzePans },
    { id: 6, name: "Double Coat Non-Stick", price: "N100,000", image: OpenPot },
  ];

  return (
    <main>
      <MainText />
      <div className="grid-container">
        {products.map((product) => (
          <div key={product.id}>
            <Text
              src={product.image}
              header={product.name}
              price={product.price}
            />
            <MainElements addToCart={addToCart} product={product} />
          </div>
        ))}
      </div>
      <div className="checkout">
        <Link to="/checkout">
          <button>Go to Checkout</button>
        </Link>
      </div>
    </main>
  );
};

export default MainContent;
