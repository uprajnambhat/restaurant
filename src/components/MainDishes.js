import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../styleSheets/mainDishesStyleSheet.css";
import Button from "react-bootstrap/Button";

const MainDishes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
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
  }, []);
  const { mainDishDetails = [] } = useSelector((state) => state.menuDetails);
  console.log("mainDishDetails are:", mainDishDetails);
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
                          <Button className="qtyButtonStyle">-</Button>
                          <p>0</p>
                          <Button className="qtyButtonStyle">+</Button>
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
