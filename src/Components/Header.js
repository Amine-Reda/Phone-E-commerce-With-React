import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img className="header__leftLogo" src={logo} alt="logo" />
        <Link className="header__leftLink" to="/">
          Products
        </Link>
      </div>
      <div className="header__right">
        <Link to="/cart">
          <button className="header__rightCart">
            <ShoppingCartIcon />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
