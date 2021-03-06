import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument /*, addCollectionAndDocuments */} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';
//import {selectCollectionsForPreview} from './redux/shop/shop.selectors';

class App extends React.Component {
  //use it to avoid memory leaks of authentication. Set authentication to null
  unsubscribeFromAuth = null;

  //when a user log in, the state will change to the name of the user
  componentDidMount() {
    const { setCurrentUser /*, collectionsArray*/ } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        //if the authorization is successful
        //get the reference from the createUser method
        const userRef = await createUserProfileDocument(userAuth); //if the user is not registered, create a new userRef doc

        //collecting the data from database to the application, by setting state to the user properties
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        //set state of the current user to null again
        setCurrentUser(userAuth);

        //This was a piece of code to add the data collection from the app to the firebase
        /*/the collectionsArray will return an array of objects with only the values described (title and items)
        addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
        */
      }
    });
  }

  //closes the subscription "logout" by setting state of authentication to null
  componentWillUnmount() {
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
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact={false} path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() => // if the user is logged in, it redirects and does not allow user to go to signin page 
              this.props.currentUser ? (
                <Redirect to="/" /> // redirects to homepage
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  //collectionsArray: selectCollectionsForPreview
});

//dispatch is just a way to inform redux that this is an action obj to be sent to every reducer
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
