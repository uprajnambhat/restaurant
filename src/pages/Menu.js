import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styleSheets/menuStyleSheet.css";

import burger from "../images/pngwing 4.png";
import sandwich from "../images/pngwing 6.png";
import iceCream from "../images/pngwing 3.png";
import juice from "../images/pngwing 7.png";

const Menu = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div>
              <div className="menuDetails">
                <p>CUSTOMER FAVOURITES</p>
                <h1>Popular Catagories</h1>
              </div>
              <div className="mainMenuStyle">
                <div className="menuRectangleBackground">
                  <div className="menuCircleBackground">
                    <img className="ImgStyle" src={burger} />
                  </div>
                  <div className="detailsStyle">
                    <h5>Main Dish</h5>
                    <p>(86 dishes)</p>
                  </div>
                </div>
                <div className="menuRectangleBackground">
                  <div className="menuCircleBackground">
                    <img className="ImgStyle" src={sandwich} />
                  </div>
                  <div className="detailsStyle">
                    <h5>Break Fast</h5>
                    <p>(12 break fast)</p>
                  </div>
                </div>
                <div className="menuRectangleBackground">
                  <div className="menuCircleBackground">
                    <img className="ImgStyle" src={iceCream} />
                  </div>
                  <div className="detailsStyle">
                    <h5>Desert</h5>
                    <p>(48 desert)</p>
                  </div>
                </div>
                <div className="menuRectangleBackground">
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
