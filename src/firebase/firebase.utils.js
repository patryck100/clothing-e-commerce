import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

//Collected from google firebase, it is how firebase knows that the application
//is connected to your firebase account and database
const config = {
  apiKey: "AIzaSyDW1FCUR-z0EoDLyfNIbICaxpXJZipV-Zo",
  authDomain: "clothing-db-5732c.firebaseapp.com",
  projectId: "clothing-db-5732c",
  storageBucket: "clothing-db-5732c.appspot.com",
  messagingSenderId: "405758138715",
  appId: "1:405758138715:web:0132c5826113f0a903a27e",
  measurementId: "G-0NSZD119XH",
};

//Check if the user exist or create a new one in the firebase
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; //if the user doesn't exist, do nothing

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  /*/gets a reference of all the users in the database
  const collectionRef = firestore.collection('users');
  */

  const snapShot = await userRef.get(); //it returns the document including a property "exists" to say if it exist or not

  /*/collects the data for each reference
  const collectionSnapshot = await collectionRef.get();
  console.log({collection: collectionSnapshot.docs.map(doc => doc.data())});
  */
  if (!snapShot.exists) {
    //if it doesn't exist, create a new user...
    const { displayName, email } = userAuth; //properties that we want to store from the userAuth
    const createdAt = new Date(); //current date and time it was created

    try {
      //setting a new user
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

//convert collections snapshot doc from the firestore in object with only the properties we need
export const convertCollectionsSnapshotToMap = (collections) => {  
  const transformedCollection = collections.docs.map((doc) => { //goes through each doc
    const { title, items } = doc.data(); //gets the data from the doc

    //returns the trasnformed obj with the properties we need
    return {
      //javascript render to convert unreadable url string to readable url
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  /*accumulator basically accumulates the object. For an array of {0,1,2,3}
    if used accumulator to sum, it would sum 0+1+2+3 = 6 */
  //for each object being fetched from the firestore, it sets the title to the name of the collection
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection; //each collection will be named with the respective title
    return accumulator;
  }, {}) //second argument is the initial accumulator, in this case null cause we want start from the first obj
};

//Makes new collections and documents from the app to the firebase without having to do it manually
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey); //if the collection ref exists, use it otherwise creates a new collection

  const batch = firestore.batch(); //it is a secury way to upload things to database since if it is interrupted it doesn't upload, only if it is completely successful
  objectsToAdd.forEach((obj) => {
    //for each object...
    const newDocRef = collectionRef.doc(); //creates a new document reference and randomly generate IDs
    batch.set(newDocRef, obj);
  });

  return await batch.commit(); //commit the changes in the the database with a confirmation that everything was uploaded
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

//trigger google pop up whenever we use the google auth provider for authentication and sign in
provider.setCustomParameters({ prompt: "select_account" });

//uses the google pop up
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//in case we want the whole library
export default firebase;
