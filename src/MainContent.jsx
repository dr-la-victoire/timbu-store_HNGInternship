import React from "react";
import MainText from "./MainText";
import Text from "./Text";
import StainlessSteelPots from "./Images/stainless-steel-pots.jpg";
import BlueFryingPan from "./Images/blue-frying-pan.jpg";
import TransparentKettle from "./Images/transparent-kettle.jpg";
import WoodenShelvesPots from "./Images/wooden-shelves-pots.jpg";
import BronzePans from "./Images/bronze-pans.jpg";
import OpenPot from "./Images/open-pot.jpg";

const MainContent = () => {
  const images = [
    StainlessSteelPots,
    BlueFryingPan,
    TransparentKettle,
    WoodenShelvesPots,
    BronzePans,
    OpenPot,
  ];

  const header = [
    "Classic Non-Stick Set",
    "Stain-Free Frying Pan",
    "Transparent Kettle",
    "Superior Non-Stick Set",
    "Non-Rust Frying Pan",
    "Double Coat Non-Stick",
  ];

  const price = [
    "N190,000",
    "N90,000",
    "N100,000",
    "N290,000",
    "N80,000",
    "N100,000",
  ];

  return (
    <main>
      <MainText />
      <Text src={images[0]} header={header[0]} price={price[0]} />
      <Text src={images[1]} header={header[1]} price={price[1]} />
      <Text src={images[2]} header={header[2]} price={price[2]} />
      <Text src={images[3]} header={header[3]} price={price[3]} />
      <Text src={images[4]} header={header[4]} price={price[4]} />
      <Text src={images[5]} header={header[5]} price={price[5]} />
    </main>
  );
};

export default MainContent;
