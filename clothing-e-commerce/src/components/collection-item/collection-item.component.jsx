import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";

const CollectiomItem = ({ item, addItem }) => {
  //distructuring the item so "item." won't be necessary wen mentioning name/price/imageUrl or id
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        onClick={
          () =>
            addItem(
              item
            ) /* on click it will pass the item object to dispatch */
        }
        inverted
      >
        {" "}
        Add to cart
      </CustomButton>
    </div>
  );
};

//every time this function is called, it gets the item as a property and dispatch it to redux as an action
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

//pass the initial statement of this prop as null because the cart would be empty, then if changes dispatch the new items
export default connect(null, mapDispatchToProps)(CollectiomItem);
