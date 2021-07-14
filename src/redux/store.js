import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

//this is just to make it scalable, to increase with the input
const middlewares = [logger];

//...middlewares basically spread in the "applyMiddleware()" function each logger as individual argument
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//allows the browser to catch or store data depending on configuration option
export const persistor = persistStore(store);

//export default { store, persistor };
