/*
import firebase from "firebase/app";

import "firebase/firestore";

const firestore = firebase.firestore();

//A way to collect data from firebase firestore
firestore
  .collection("users")
  .doc("QAyjyUgzM7qNhbyuBShy")
  .collection("cartItems")
  .doc("be8l2tgmNqQxTZB71ZTR");

//same as above
firestore.doc("/users/QAyjyUgzM7qNhbyuBShy/cartItems/be8l2tgmNqQxTZB71ZTR");

//get collection
firestore.collection("/users/QAyjyUgzM7qNhbyuBShy/cartItems");

//using the idea of promisses, fetch and if works keep going...
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()) //gives us back a promisse in json format
  .then((users) => {
    //gets the value from the response
    const firstUser = users[0]; //set the first item from the array to "firstUser"
    console.log(firstUser);
    return fetch(
      //another promisse, where it fetches the data from the specified user
      "https://jsonplaceholder.typicode.com/posts?userId=" + firstUser.id
    );
  })
  .then((response) => response.json()) //convert this value in json
  .then((posts) => console.log(posts)) //log the value so then we can see
  .catch((error) => console.log(error)); //this catches any error that could occur above

//same as above but with more security of this is gonna work, because it only continues if the
//code above receives its response
//by using async () it allows us to use await function
const myAsyncFunction = async () => {
  try {
    //awaits until the promisse gets a response to continue with the rest of the code
    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = await usersResponse.json();
    const secondUser = users[1];
    console.log(secondUser);
    const postsResponse = await fetch(
      //another promisse, where it fetches the data from the specified user
      "https://jsonplaceholder.typicode.com/posts?userId=" + secondUser.id
    );
    const posts = await postsResponse.json(); //convert it to json
    console.log(posts);
  } catch (err) { //catches the errors
      console.log("there was an error");
  }
};

*/