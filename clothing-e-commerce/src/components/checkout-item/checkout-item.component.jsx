import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

//when this component is called, uses "cartItem" as prop to populate the component
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;{" "}
        {/*codig to display the X "https://www.w3schools.com/charsets/ref_utf_dingbats.asp"*/}
      </div>
    </div>
  );
};

//update the state of item in the function "clearItemFromCart" from reducer
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
