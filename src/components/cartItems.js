import React from "react";
import { useSelector } from "react-redux";

const cartItems = () => {
  const {
    mainDishDetails = [],
    breakFastItems = [],
    dessertMenu = [],
    selectedItems = [],
  } = useSelector((state) => state.menuDetails);
  return <div>cartItems</div>;
};

export default cartItems;
