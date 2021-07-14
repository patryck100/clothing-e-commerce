import firebase from "firebase/app";

import 'firebase/firestore';
import 'firebase/auth';

//Collected from google firebase, it is how firebase knows that the application
//is connected to your firebase account and database
const config = {
    apiKey: "AIzaSyDW1FCUR-z0EoDLyfNIbICaxpXJZipV-Zo",
    authDomain: "clothing-db-5732c.firebaseapp.com",
    projectId: "clothing-db-5732c",
    storageBucket: "clothing-db-5732c.appspot.com",
    messagingSenderId: "405758138715",
    appId: "1:405758138715:web:0132c5826113f0a903a27e",
    measurementId: "G-0NSZD119XH"
  };

//Check if the user exist or create a new one in the firebase
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return; //if the user doesn't exist, do nothing

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get(); //it returns the document including a property "exists" to say if it exist or not

  if (!snapShot.exists) { //if it doesn't exist, create a new user...
    const { displayName, email } = userAuth; //properties that we want to store from the userAuth
    const createdAt = new Date(); //current date and time it was created

    try { //setting a new user
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

//trigger google pop up whenever we use the google auth provider for authentication and sign in
provider.setCustomParameters({prompt: 'select_account'});

//uses the google pop up
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//in case we want the whole library
export default firebase;