import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

const CollectiomItem = ({ item, addItem }) => {
  //distructuring the item so "item." won't be necessary wen mentioning name/price/imageUrl or id
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />

      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton
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
      </AddButton>
    </CollectionItemContainer>
  );
};

//every time this function is called, it gets the item as a property and dispatch it to redux as an action
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

//pass the initial statement of this prop as null because the cart would be empty, then if changes dispatch the new items
export default connect(null, mapDispatchToProps)(CollectiomItem);
