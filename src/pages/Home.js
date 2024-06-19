import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import intersect from "../images/Intersect.png";
import vegSalad from "../images/image 13.png";
import noodles from "../images/image 14.png";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../styleSheets/homeStyleSheet.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { colors } from "@mui/material";
const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="homeStyle">
            <div>
              <h1 className="mainHeading">
                Dive into Delights <br></br>Of Delectable
                <span style={{ color: "#39db4a" }}> Food</span>
              </h1>
              <p className="paraStyle">
                Where Each Plate Weaves a Story of Culinary<br></br> Mastery and
                Passionate Craftsmanship
              </p>
              <div className="buttonStyle">
                <Button className="orderButton">Order Now</Button>
                <Button className="videoButton">
                  Watch Video
                  <PlayCircleOutlineIcon />
                </Button>
              </div>
            </div>
            <div>
              <div className="circleBackground">
                <img className="mainImgStyle" src={intersect} />
              </div>
              <div className="foodDisplayStyle">
                <div className="rectangleBackground">
                  <img src={noodles} />
                  <p>
                    Spicy Noodles<br></br>
                    <span className="starIconStyleYellow">
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                    </span>
                    <span className="starIconStyleWhite">
                      <StarBorderIcon />
                      <StarBorderIcon />
                    </span>
                    <br></br>
                    <span style={{ color: "#FF7979", fontSize: "10px" }}>
                      $
                    </span>
                    18.00
                  </p>
                </div>
                <div className="rectangleBackground">
                  <img src={vegSalad} />
                  <p>
                    Vegetarian salad<br></br>
                    <span className="starIconStyleYellow">
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                    </span>
                    <span className="starIconStyleWhite">
                      <StarBorderIcon />
                    </span>
                    <br></br>
                    <span style={{ color: "#FF7979", fontSize: "10px" }}>
                      $
                    </span>
                    23.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
