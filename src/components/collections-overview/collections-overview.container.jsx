import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.components";


//returns boolean to inform if the data is being fetch or has finished fetching data
//use it to set the withSpinner when it is true
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

/* Composes single-argument functions from right to left. 
 * The rightmost function can take multiple arguments as it provides
 * the signature for the resulting composite function.
 */
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;