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