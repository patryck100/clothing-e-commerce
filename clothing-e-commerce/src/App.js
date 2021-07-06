import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null

    }

  }

  //use it to avoid memory leaks of authentication. Set authentication to null
  unsubscribeFromAuth = null;

  //when a user log in, the state will change to the name of the user
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  //closes the subscription "logout" by setting state of authentication to null
  componentWillUnmount(){
    this.unsubscribeFromAuth();    
  }


  render() {
    return (
      //exact is an argument true or false that uses the path. True the path must be exacly
      //the same as written in the "path" in order to render the component
      //Switch allows when the path in Route matches, it only render the component in that route
      //Swtich helps to render only what we want
      //by placing the Header outside the Switch, it will always be displayed and rendered
      <div className="App">
        <Header currentUser={this.state.currentUser}/> {/* pass in the current state of the user */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact={false} path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
