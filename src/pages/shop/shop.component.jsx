import React from "react";

//gives access to match, location and history
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.components";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
  console.log(match);
  return(
  <div className="shop-page">
      <Route exact path={`${match.path}` /*same as /shop:category*/} component={CollectionsOverview}/>
      <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
  </div>
)};


export default ShopPage;
