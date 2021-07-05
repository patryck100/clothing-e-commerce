import React from "react";

import CollectiomItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

//by using filter, it hides any other ids which are higher than 4 (line 10)
const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title"> {title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({id, ...otherItemProps}) => (
        <CollectiomItem key={id} {...otherItemProps}/>
      ))}
    </div>
  </div>
);

export default CollectionPreview;
