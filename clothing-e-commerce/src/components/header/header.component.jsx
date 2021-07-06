import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

//Syntax for importing svg image {ReactComponent as blabla}
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = ({ currentUser }) => (
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
      {currentUser ? ( //gives the user the option to sign out in case he/she is sign in already
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : ( //otherwise it points to the page to sign in
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
