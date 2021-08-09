import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from './collection.component';

//returns boolean to inform if the data is being fetch or has finished fetching data
//use it to set the withSpinner when it is true
const mapStateToProps = createStructuredSelector({
    /* it only loads the spinner if the boolean is true, in this case if there is no collection 
    the boolean will be false. For this reason the value has to be inverse */
    isLoading: (state) => !selectIsCollectionsLoaded(state) //inverse the value from "loading"
});

/* Composes single-argument functions from right to left. 
 * The rightmost function can take multiple arguments as it provides
 * the signature for the resulting composite function.
 */
//it basically passes props down to the components
const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionsPageContainer;
