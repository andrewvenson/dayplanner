// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdHYp5KDGkyKh0bq1tkDyDdkxog_6zBr0",
  authDomain: "dailyplannerplus.firebaseapp.com",
  databaseURL: "https://dailyplannerplus.firebaseio.com",
  projectId: "dailyplannerplus",
  storageBucket: "dailyplannerplus.appspot.com",
  messagingSenderId: "526778670966",
  appId: "1:526778670966:web:2aacafa5bd3dd1625e2457",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
