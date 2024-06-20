import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../styleSheets/mainDishesStyleSheet.css";
import Button from "react-bootstrap/Button";
import {
  eachItemCount,
  getItem,
  onAddClick,
  onSubtractClick,
  sum,
} from "../utils";

const MainDishes = () => {
  const dispatch = useDispatch();
  const { mainDishDetails = [], selectedItems = [] } = useSelector(
    (state) => state.menuDetails
  );

  useEffect(() => {
    if (mainDishDetails?.length == 0) {
      axios
        .get("http://localhost:3004/mainDishes")
        .then((response) => {
          console.log(response.data.mainDishes);
          dispatch({
            type: "UPDATE_MAINDISHES_DETAILS",
            payload: response.data.mainDishes,
          });
        })
        .catch((error) => {
          console.log(error);
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

  return (
    <Container>
      <Row>
        <Col>
          <div className="menuItemsPageStyle">
            <h5>Main Dishes</h5>
            <Row xs={1} md={2} className="g-4">
              {mainDishDetails.map((eachDish, idx) => {
                const { name = "", image = "", price = "" } = eachDish;
                return (
                  <Col key={idx}>
                    <Card>
                      <Card.Img variant="top" src={image} />
                      <Card.Body>
                        <Card.Title className="cardTitleStyle">
                          {name}
                        </Card.Title>
                        <Card.Text className="cardTextStyle">{price}</Card.Text>
                        <div className="quantityAndSigns">
                          <Button
                            onClick={() => {
                              onMinusClick(eachDish);
                            }}
                            className="qtyButtonStyle"
                          >
                            -
                          </Button>
                          <p>{eachItemCount(eachDish.name, selectedItems)}</p>
                          <Button
                            onClick={() => {
                              onPlusClick(eachDish);
                            }}
                            className="qtyButtonStyle"
                          >
                            +
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainDishes;
