import React from "react";
import { Link } from "react-router-dom";

//Syntax for importing svg image {ReactComponent as blabla}
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = () => (
  //creating a div to contain the logo, and another sub div options with shop and contact
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      <Link className="option" to="/signin">
        SIGN IN
      </Link>
    </div>
  </div>
);

export default Header;
