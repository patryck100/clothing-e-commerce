import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  //does not return payload because it is just to update the state of "isFetching" or not
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

//this function dispatching other functions is only possible thanks to the redux-thunk
export const fetchCollectionsStartAsync = () => {
  //returns a function
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart()); //dispatch the collectionsStart to inform that it has started fetching data

    //then begins the asyn request
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap)); //updates the collection with the data fetch from firestore
      }) //else if anything goes wrong, if catch the error and dispatch the error message to the fetchCollectionFailure function
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
