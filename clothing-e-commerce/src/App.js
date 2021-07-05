import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";


function App() {
  return (
    //exact is an argument true or false that uses the path. True the path must be exacly
    //the same as written in the "path" in order to render the component
    //Switch allows when the path in Route matches, it only render the component in that route
    //Swtich helps to render only what we want
    //by placing the Header outside the Switch, it will always be displayed and rendered
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact={false} path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
