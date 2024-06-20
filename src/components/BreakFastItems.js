import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import "../styleSheets/breakFastAndDessertStyleSheet.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import {
  eachItemCount,
  getItem,
  onAddClick,
  onSubtractClick,
  sum,
} from "../utils";

const BreakFastItems = () => {
  const dispatch = useDispatch();
  const { breakFastItems = [], selectedItems = [] } = useSelector(
    (state) => state.menuDetails
  );
  useEffect(() => {
    if (breakFastItems?.length == 0) {
      axios
        .get("http://localhost:3004/breakFast/breakFastItems")
        .then((response) => {
          console.log("breakfastItems", response.data);
          dispatch({
            type: "UPDATE_BREAKFAST_ITEMS",
            payload: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
          dispatch({
            type: "UPDATE_BREAKFAST_ITEMS",
            payload: [
              {
                name: "Pancakes",
                price: 5.99,
              },
              {
                name: "Omelette",
                price: 6.99,
              },
              {
                name: "French Toast",
                price: 7.49,
              },
              {
                name: "Bagel with Cream Cheese",
                price: 3.99,
              },
              {
                name: "Breakfast Burrito",
                price: 8.49,
              },
              {
                name: "Smoothie Bowl",
                price: 7.99,
              },
              {
                name: "Avocado Toast",
                price: 6.49,
              },
              {
                name: "Waffles",
                price: 6.99,
              },
              {
                name: "Scrambled Eggs",
                price: 4.99,
              },
              {
                name: "Fruit Parfait",
                price: 5.49,
              },
              {
                name: "Egg Sandwich",
                price: 4.79,
              },
              {
                name: "Cinnamon Roll",
                price: 3.29,
              },
              {
                name: "Granola with Yogurt",
                price: 5.99,
              },
              {
                name: "Hash Browns",
                price: 2.99,
              },
              {
                name: "Muffin",
                price: 2.49,
              },
            ],
          });
        });
    }
  }, []);
  const onPlusClick = ({ name = "" }) => {
    console.log("sum of", onAddClick(name, selectedItems));
    dispatch({
      type: "UPDATE_SELECTED_ITEMS",
      payload: onAddClick(name, selectedItems),
    });
  };

  const onMinusClick = ({ name = "" }) => {
    dispatch({
      type: "UPDATE_SELECTED_ITEMS",
      payload: onSubtractClick(name, selectedItems),
    });
  };

  console.log("sum of", sum(4, 5));

  return (
    <Container>
      <Row>
        <Col>
          <div className="menuItemsPageStyle">
            <h5>BreakFast Menu</h5>
            <div className="cardContainer">
              {breakFastItems.map((eachItem, index) => {
                const { name = "", price = "" } = eachItem;
                return (
                  <div key={`eachItem ${index}`} className="cardHolder">
                    <div className="itemDetails">
                      <h5>{name}</h5>
                      <p>
                        <span style={{ color: "red", fontSize: "18px" }}>
                          $
                        </span>
                        {price}
                      </p>
                    </div>
                    <div className="quantityAndSigns">
                      <Button
                        onClick={() => {
                          onMinusClick(eachItem);
                        }}
                        className="qtyButtonStyle"
                      >
                        -
                      </Button>
                      <p>{eachItemCount(eachItem.name, selectedItems)}</p>
                      <Button
                        onClick={() => {
                          onPlusClick(eachItem);
                        }}
                        className="qtyButtonStyle"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BreakFastItems;
