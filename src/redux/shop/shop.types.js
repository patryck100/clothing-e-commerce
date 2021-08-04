const ShopActionTypes = {
    FETCH_COLLECTIONS_START: 'FETCH_COLLECTIONS_START', //before fetching any data, initial state (same as onNext)
    FETCH_COLLECTIONS_SUCCESS: 'FETCH_COLLECTIONS_SUCCESS', //when the data is fetch (same as onComplete)
    FETCH_COLLECTIONS_FAILURE: 'FETCH_COLLECTIONS_FAILURE', //in case of failure, handle it (same as onError)
};

export default ShopActionTypes;