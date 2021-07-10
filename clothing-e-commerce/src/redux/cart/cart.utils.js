//first argument is the existem items, and second argument is the new item to be added
export const addItemToCart = (cartItems, cartItemToAdd) => {
  //set existingCartItem to true if the item already exist in the cart
  const existingCartItem = cartItems.find( //first item found in an array based in a condition...
    (cartItem) => cartItem.id === cartItemToAdd.id
  ); //if does't find it will be undefined

    if(existingCartItem) { //if the item already exist in the cart
        //return a new array with quantity of that item +1 in order to re-render the component
        return cartItems.map(cartItem => //goes true the whole array
            cartItem.id === cartItemToAdd.id //item in the cart that matches with the item to be added
            ? {...cartItem, quantity: cartItem.quantity + 1} //create new array with the old items in the list and increase quantity of the repeated one
            : cartItem) //otherwise just return the cartItem array as before
    }

    //each new item added will start counting by 1 as default. If it repeat just increast +1 for each repeated item
    return [...cartItems, {...cartItemToAdd, quantity:1}]

};
