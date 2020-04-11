import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyCJZ2uipi4dEMHkQHPxqCFApmZMkso5McE",
  authDomain: "gloomg.firebaseapp.com",
  databaseURL: "https://gloomg.firebaseio.com",
  projectId: "gloomg",
  storageBucket: "gloomg.appspot.com",
  messagingSenderId: "594242164322",
  appId: "1:594242164322:web:15094dd9c6dd647438e33b",
  measurementId: "G-S2RTFM00CC",
});

export const auth = app.auth();
export const db = app.firestore();
