import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

const Directory = ({ sections }) => (
  /*maping through the sections by distructuring the section into
   * title, imageUrl and id. Then using id as key
   */
  /* can also be done like
  {this.state.sections.map(({id, ...otherSectionProps }) => (
  <MenuItem key={id} {...otherSectionProps}/>
  */
  <div className="directory-menu">
    {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
      <MenuItem
        key={id}
        title={title}
        imageUrl={imageUrl}
        size={size}
        linkUrl={linkUrl}
      />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
