import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

//the cart dorpdown initial state should be hidden, and if something triggers it, then it should show up
const INITAL_STATE = {
  hidden: true,
  cartItems: []
};


//the state of the dropdown starts with the initial_state
//and based in an action it can change or just keep the way it was
const cartReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN: //hidden or unhidden the cart on the top right edge of the screen
      return {
        ...state, //spread the state 
        hidden: !state.hidden, //if its hidden then unhidden and vice versa
      };
      case CartActionTypes.ADD_ITEM: //add new items to the cart
        return{
          ...state, //spread the state
          cartItems: addItemToCart(state.cartItems, action.payload) //old state of the cartItem + the new object that is just being added
        }
    default:
      return state;
  }
};

export default cartReducer;
