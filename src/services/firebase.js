import firebase from "firebase";
// import * as firebaseui from "firebaseui";

firebase.initializeApp({
  apiKey: "AIzaSyCJZ2uipi4dEMHkQHPxqCFApmZMkso5McE",
  authDomain: "gloomg.firebaseapp.com",
  databaseURL: "https://gloomg.firebaseio.com",
  projectId: "gloomg",
  storageBucket: "gloomg.appspot.com",
  messagingSenderId: "594242164322",
  appId: "1:594242164322:web:15094dd9c6dd647438e33b",
  measurementId: "G-S2RTFM00CC",
});

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

export { firebase };
export const db = firebase.firestore();

firebase.auth().onAuthStateChanged(
  (user) => {
    console.log(user.uid);
  },
  (error) => {
    console.error(error);
  }
);
