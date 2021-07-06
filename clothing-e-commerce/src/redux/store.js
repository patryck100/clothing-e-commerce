import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

//this is just to make it scalable, to increase with the input
const middlewares = [logger]; 

//...middlewares basically spread in the "applyMiddleware()" function each logger as individual argument
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;