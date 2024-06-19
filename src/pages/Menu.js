import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styleSheets/menuStyleSheet.css";
import burger from "../images/pngwing 4.png";
import sandwich from "../images/pngwing 6.png";
import iceCream from "../images/pngwing 3.png";
import juice from "../images/pngwing 7.png";
import fattoushSalad from "../images/Fattoush salad.png";
import vegetableSalad from "../images/Vegetable salad.png";
import eggSalad from "../images/Egg salad.png";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/esm/Button";

const Menu = () => {
  const navigate = useNavigate();
  const {
    mainDishDetails = [],
    breakFastItems = [],
    dessertMenu = [],
  } = useSelector((state) => state.menuDetails);

  const onMainDishClick = () => {
    navigate("/Menu/MainDishes");
  };

  const onBreakFastClick = () => {
    navigate("/Menu/BreakFastItems");
  };

  const onDessertClick = () => {
    navigate("/Menu/DessertMenu");
  };

  const onBrowseAllClick = () => {
    navigate("/Menu/BrowseAll");
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="menuDetails">
              <div className="menuDetails1">
                <p>CUSTOMER FAVOURITES</p>
                <h1>Popular Catagories</h1>
              </div>
              <div className="mainMenuStyle">
                <div
                  onClick={onMainDishClick}
                  className="menuRectangleBackground"
                >
                  <div className="menuCircleBackground">
                    <img className="ImgStyle" src={burger} />
                  </div>
                  <div className="detailsStyle">
                    <h5>Main Dish</h5>
                    <p>({mainDishDetails.length} dishes)</p>
                  </div>
                </div>
                <div
                  onClick={onBreakFastClick}
                  className="menuRectangleBackground"
                >
                  <div className="menuCircleBackground">
                    <img className="ImgStyle" src={sandwich} />
                  </div>
                  <div className="detailsStyle">
                    <h5>Break Fast</h5>
                    <p>({breakFastItems.length} break fast)</p>
                  </div>
                </div>
                <div
                  onClick={onDessertClick}
                  className="menuRectangleBackground"
                >
                  <div className="menuCircleBackground">
                    <img className="ImgStyle" src={iceCream} />
                  </div>
                  <div className="detailsStyle">
                    <h5>Dessert</h5>
                    <p>({dessertMenu.length} dessert)</p>
                  </div>
                </div>
                <div
                  onClick={onBrowseAllClick}
                  className="menuRectangleBackground"
                >
                  <div className="menuCircleBackground">
                    <img className="ImgStyle" src={juice} />
                  </div>
                  <div className="detailsStyle">
                    <h5>Browse All</h5>
                    <p>(255 items)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="secondMenuDetails">
              <p>SPECIAL DISHES</p>
              <div className="menuDetails2">
                <div className="standOutDishes">
                  Standout Dishes <br></br> From Our Menu
                </div>
                <div className="arrowIcons">
                  <div className="arrowIconsBackgroundLeft">{"\u003C"}</div>
                  <div className="arrowIconsBackgroundRight">{"\u003E"}</div>
                </div>
              </div>
              <div className="standoutDishesMenu">
                <div className="standoutRectangleBackground">
                  <div className="favouriteDish">
                    <FavoriteIcon />
                  </div>
                  <img src={fattoushSalad} />
                  <h5>Fattoush salad</h5>
                  <p>Description of the item</p>
                  <div className="ratingAndPrice">
                    <div>
                      <p className="price">
                        <span style={{ color: "#FF7979", fontSize: "24px" }}>
                          $
                        </span>
                        24
                      </p>
                    </div>
                    <div>
                      <p className="rating">
                        <span className="starIconStyleYellow">
                          <StarRateIcon />
                        </span>{" "}
                        4.9
                      </p>
                    </div>
                  </div>
                  <div className="quantityAndSigns" style={{ padding: "4%" }}>
                    <Button className="qtyButtonStyle">-</Button>
                    <p style={{ color: "#39db4a" }}>0</p>
                    <Button className="qtyButtonStyle">+</Button>
                  </div>
                </div>
                <div className="standoutRectangleBackground">
                  <div className="favouriteDish">
                    <FavoriteBorderIcon />
                  </div>
                  <img src={vegetableSalad} />
                  <h5>Vegetable salad</h5>
                  <p>Description of the item</p>
                  <div className="ratingAndPrice">
                    <div>
                      <p className="price">
                        <span style={{ color: "#FF7979", fontSize: "24px" }}>
                          $
                        </span>
                        26
                      </p>
                    </div>
                    <div>
                      <p className="rating">
                        <span className="starIconStyleYellow">
                          <StarRateIcon />{" "}
                        </span>
                        4.6
                      </p>
                    </div>
                  </div>
                  <div className="quantityAndSigns" style={{ padding: "4%" }}>
                    <Button className="qtyButtonStyle">-</Button>
                    <p style={{ color: "#39db4a" }}>0</p>
                    <Button className="qtyButtonStyle">+</Button>
                  </div>
                </div>
                <div className="standoutRectangleBackground">
                  <div className="favouriteDish">
                    <FavoriteBorderIcon />
                  </div>
                  <img src={eggSalad} />
                  <h5>Egg vegi salad</h5>
                  <p>Description of the item</p>
                  <div className="ratingAndPrice">
                    <div>
                      <p className="price">
                        <span style={{ color: "#FF7979", fontSize: "24px" }}>
                          $
                        </span>
                        23
                      </p>
                    </div>
                    <div>
                      <p className="rating">
                        <span className="starIconStyleYellow">
                          <StarRateIcon />{" "}
                        </span>
                        4.5
                      </p>
                    </div>
                  </div>
                  <div className="quantityAndSigns" style={{ padding: "4%" }}>
                    <Button className="qtyButtonStyle">-</Button>
                    <p style={{ color: "#39db4a" }}>0</p>
                    <Button className="qtyButtonStyle">+</Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
