import React from "react";
import { connect } from "react-redux";
//wrap connect and take its arguments, give access to history
import { withRouter } from "react-router-dom"; 

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from 'reselect';

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length ? //if the cartItems array has a length greater than 0, show the items
        cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
      : //otherwise show empty-message
      <span className='empty-message'> Your cart is empty</span>
    }
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden()); //when click on go to checkout, it changes the state of the cart-dropwdown to hidden
    }} >GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({ //{ cart: { cartItems } }
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
