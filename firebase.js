import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCSVOT-eK8W6vFvOdWqZ2OReCh0KkPKBrU",
  authDomain: "foodu-67cf5.firebaseapp.com",
  databaseURL: "https://foodu-67cf5.firebaseio.com",
  projectId: "foodu-67cf5",
  storageBucket: "foodu-67cf5.appspot.com",
  messagingSenderId: "631410413855"
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
