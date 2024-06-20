import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import "../styleSheets/breakFastAndDessertStyleSheet.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";

const BreakFastItems = () => {
  const dispatch = useDispatch();
  const { breakFastItems = [] } = useSelector((state) => state.menuDetails);
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
        });
    }
  }, []);

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
                      <Button className="qtyButtonStyle">-</Button>
                      <p>0</p>
                      <Button className="qtyButtonStyle">+</Button>
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
