import React from "react";
import { connect } from "react-redux";
//wrap connect and take its arguments, give access to history
import { withRouter } from "react-router-dom"; 
import {createStructuredSelector} from 'reselect';

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import CollectiomItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

//by using filter, it hides any other ids which are higher than 4 (line 10)
const CollectionPreview = ({ title, items,history }) => (
  <div className="collection-preview">
    <h1 className="title" onClick={() => {
      history.push(`/shop/${title.toLowerCase()}`);}}> {title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
        <CollectiomItem key={item.id} item={item}/>
      ))}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default withRouter(connect(mapStateToProps)(CollectionPreview));
