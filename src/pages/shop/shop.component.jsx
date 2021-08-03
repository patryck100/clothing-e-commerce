import React from "react";

//gives access to match, location and history
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverview from "../../components/collections-overview/collections-overview.components";
import CollectionPage from "../collection/collection.component";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

//WithSpinner basically renders a loading spinner if the boolean "isLoading" is true, otherwise renders the component itself
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  }; /*this is the simplified way to do:
  constructor() {
    super();
    this.state = {
      loading: true
    }
  } */

  
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const{updateCollections} = this.props;

    //gets the reference of the collection inside the firestore
    const collectionRef = firestore.collection("collections");

    //another way to fetch the data through simple remote call instead of async
  /*   fetch('https://firestore.googleapis.com/v1/projects/clothing-db-5732c/databases/(default)/documents/collections')
    .then(response => response.json())
    .then(collections => console.log(collections)); */

    //when it updates the info or runs for the first time, gets the collection...
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      //convert the collection to readable snapshot objects
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading:false}) //once it finishes fetching the data from firestore, set state "loading" to false
    });
  }

  render() {
    const { match } = this.props;
    const {loading} = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}` /*same as /shop:category*/}
          render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps )(ShopPage);
