import CartActionTypes from "./cart.types";

//the cart dorpdown initial state should be hidden, and if something triggers it, then it should show up
const INITAL_STATE = {
  hidden: true,
};

//the state of the dropdown starts with the initial_state
//and based in an action it can change or just keep the way it was
const cartReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN: //it will be hidden or not hidden
      return {
        ...state,
        hidden: !state.hidden, //if its hidden then unhidden and vice versa
      };
    default:
      return state;
  }
};

export default cartReducer;
