import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import oodi from "../images/oodi.png";
import iconSearch from "../images/iconSearch.png";
import { Link, useNavigate } from "react-router-dom";
import "../styleSheets/navbarMenuStyleSheet.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import { useSelector } from "react-redux";

const NavbarMenu = () => {
  const [activeItem, setActiveItem] = useState("");
  const navigate = useNavigate();
  const {
    mainDishDetails = [],
    breakFastItems = [],
    dessertMenu = [],
    selectedItems = [],
  } = useSelector((state) => state.menuDetails);

  const totalCount = () => {
    let total = 0;
    selectedItems.forEach(({ count = 0 }) => {
      total = total + count;
    });
    return total;
  };
  const handleNavClick = (item) => {
    setActiveItem(item);
  };

  const onCartClick = () => {
    if (totalCount() > 0) {
      navigate("/CartItems");
    } else {
      alert("Add items to proceed");
    }
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
                <div onClick={onCartClick} className="shoppingIcon">
                  <ShoppingCartCheckoutIcon />
                  {totalCount()}
                </div>

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
