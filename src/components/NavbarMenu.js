import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import oodi from "../images/oodi.png";
import iconSearch from "../images/iconSearch.png";
import { Link } from "react-router-dom";
import "../styleSheets/navbarMenuStyleSheet.css";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";

const NavbarMenu = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleNavClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="navbarStyle">
              <div>
                <h3>
                  <span className="logoStyle">F</span> <span> </span>
                  <img src={oodi} />
                </h3>
              </div>
              <div className="navbarMenuStyle">
                <Link
                  to="/"
                  className={activeItem == "Home" ? "active" : ""}
                  onClick={() => {
                    handleNavClick("Home");
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/Menu"
                  className={activeItem == "Menu" ? "active" : ""}
                  onClick={() => {
                    handleNavClick("Menu");
                  }}
                >
                  Menu
                </Link>
                <Link
                  to="/Services"
                  className={activeItem == "Services" ? "active" : ""}
                  onClick={() => {
                    handleNavClick("Services");
                  }}
                >
                  Services
                </Link>
                <Link
                  to="/Offers"
                  className={activeItem == "Offers" ? "active" : ""}
                  onClick={() => {
                    handleNavClick("Offers");
                  }}
                >
                  Offers
                </Link>
              </div>
              <div className="otherDetails">
                <SearchIcon className="icon" />
                <WorkOutlineIcon className="icon" />
                <Button className="buttonStyle">
                  <WifiCalling3Icon />
                  Contact
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavbarMenu;
