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
          dispatch({
            type: "UPDATE_MAINDISHES_DETAILS",
            payload: [
              {
                id: "533143aaff604d567f8b4571",
                image:
                  "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/533143aaff604d567f8b4571.jpg",
                name: "Crispy Fish Goujons ",
                price: "$23",
              },
              {
                id: "53314247ff604d44808b4569",
                image:
                  "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/53314247ff604d44808b4569.jpg",
                name: "Moroccan Skirt Steak ",
                price: "$25",
              },
              {
                id: "53314276ff604d28828b456b",
                image:
                  "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/53314276ff604d28828b456b.jpg",
                name: "Simple Sumptuous Sea Bream",
                price: "$20",
              },
              {
                id: "533143bfff604d44808b456a",
                image:
                  "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/533143bfff604d44808b456a.jpg",
                name: "Mozzarella and Pesto Roulades",
                price: "$20",
              },
              {
                id: "5331430fff604d557f8b456d",
                image:
                  "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/5331430fff604d557f8b456d.jpg",
                name: "Mexican Tortilla Stack",
                price: "$23",
              },
              {
                id: "53314328ff604d4d808b456b",
                image:
                  "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/53314328ff604d4d808b456b.jpg",
                name: "Roasted Rosemary Butternut Squash ",
                price: "$28",
              },
              {
                id: "53314343ff604d28828b456c",
                image:
                  "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/53314343ff604d28828b456c.jpg",
                name: "Gnocchi Allo Genovese",
                price: "$30",
              },
              {
                id: "53314398ff604d6c7a8b456a",
                image:
                  "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/53314398ff604d6c7a8b456a.jpg",
                name: "Herbed Italian Polpetti",
                price: "$25",
              },
              {
                id: "5252b20c301bbf46038b477e",
                image:
                  "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/5252b20c301bbf46038b477e.jpg",
                name: "Genki Yakitori with Crispy Red Onions",
                price: "$28",
              },
              {
                id: "5331430fff604d557f8b456c",
                image:
                  "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/sausage-risotto-wk41-a201d2fa.jpg",
                name: "Sausage Risotto",
                price: "$24",
              },
              {
                id: "53314328ff604d4d128b456b",
                image:
                  "https://img.hellofresh.com/f_auto,q_auto/hellofresh_s3/image/54511c31ff604dee7b8b4571.jpg",
                name: "Bacon Wrapped Pork Loin ",
                price: "$32",
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
