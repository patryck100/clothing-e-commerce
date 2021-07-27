import React from "react";
import { connect } from "react-redux";
//wrap connect and take its arguments, give access to history
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import CollectiomItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./collection-preview.styles";

//by using filter, it hides any other ids which are higher than 4 (line 30)
const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <TitleContainer
      onClick={() => {
        //when clickOn the title, it goes to the link
        history.push(`${match.path}/${routeName}`);
      }}
    >
      {" "}
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectiomItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default withRouter(connect(mapStateToProps)(CollectionPreview));
