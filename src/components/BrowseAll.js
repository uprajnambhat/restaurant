import React from "react";
import { useSelector } from "react-redux";

const BrowseAll = () => {
  const {
    mainDishDetails = [],
    breakFastItems = [],
    dessertMenu = [],
  } = useSelector((state) => state.menuDetails);
  return <div>BrowseAll</div>;
};

export default BrowseAll;
