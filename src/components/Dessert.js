import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styleSheets/breakFastAndDessertStyleSheet.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";

const Dessert = () => {
  const dispatch = useDispatch();
  const { dessertMenu = [] } = useSelector((state) => state.menuDetails);
  useEffect(() => {
    if (dessertMenu?.length == 0) {
      axios
        .get("http://localhost:3004/dessert/dessertMenu")
        .then((response) => {
          console.log("dessert hooray", response.data);
          dispatch({
            type: "UPDATE_DESSERT_MENU",
            payload: response.data,
          });
        })
        .catch((error) => {
          console.log("error");
        });
    }
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="menuItemsPageStyle">
              <h5>BreakFast Menu</h5>
              <div className="cardContainer">
                {dessertMenu.map((eachDessert, index) => {
                  const { title = "", image } = eachDessert;
                  return (
                    <div
                      key={`eachDessert ${index}`}
                      className="cardHolder"
                      style={{ height: "190px" }}
                    >
                      <div className="itemDetails">
                        <h5>{title}</h5>
                        <p>
                          <span style={{ color: "red", fontSize: "18px" }}>
                            $
                          </span>
                          20
                        </p>
                        <div className="quantityAndSigns">
                          <Button className="qtyButtonStyle">-</Button>
                          <p>0</p>
                          <Button className="qtyButtonStyle">+</Button>
                        </div>
                      </div>
                      <div className="cakeImages">
                        <img src={image} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dessert;
