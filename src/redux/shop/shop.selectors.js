import { createSelector } from "reselect";
import memoize from "lodash.memoize";

//because the url parameter is a string and the id is a number, a map was created to match both
//but after transforming the data in objects instead of arrays, it solved the problem so it is not needed anymore
/*const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
}; */

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  //get the values from the object in an specific key
  (collections) => //handle error of fetching data by render the items if exist, otherwise render null value 
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

/*By wrapping this function with memoize, we're saying that whenever this function 
gets called and receives collectionUrlParam, I want to memoize the return of this 
function (in this case we return a selector). If this function gets called again with
the same collectionUrlParam, don't rerun this function because we'll return the same 
value as last time, which we've memoized so just return the selector that's been stored. */
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections], //handle error of fetching data by render the items if exist, otherwise render null value 
    (collections) => (collections ? collections[collectionUrlParam] : null)
    /*collections.find( //find collection.id matching the url parameter from the collection_id_map **removed to increase performance, find() can get slow if the data is too big
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )*/
  )
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

//if there is no collections, isCollectionsLoaded will be false
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections // "!!" boolean if an object is empty or not
)
