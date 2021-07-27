import React from "react";
import { connect } from "react-redux"; //let us modify our component to use redux
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";

//Syntax for importing svg image {ReactComponent as blabla}
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  //creating a div to contain the logo, and another sub div options with shop and contact
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/shop">
        CONTACT
      </OptionLink>
      {currentUser ? ( //gives the user the option to sign out in case he/she is sign in already
        //Gets a Link and use as a div
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        //otherwise it points to the page to sign in
        <OptionLink to="/signin">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {/*Place the cart outside the header, but right below it */
      //if hidden is true, render nothing, otherwise render the cart dropdown
      hidden ? null : <CartDropdown />
    }
    
  </HeaderContainer>
);

//state.user.currentUser === rooot-reducer.user.currentUser
//createdStructuredSelector will match the states authomatically
const mapStateToProps = createStructuredSelector ({ //state or {user: {currentUser}, cart: {hidden}}
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
