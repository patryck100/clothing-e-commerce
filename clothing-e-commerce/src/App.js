import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";


function App() {
  return (
    //exact is an argument true or false that uses the path. True the path must be exacly
    //the same as written in the "path" in order to render the component
    //Switch allows when the path in Route matches, it only render the component in that route
    //Swtich helps to render only what we want
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact={false} path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
