// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARLoLT8277l2UnhnArK958E5m3zQHCvKQ",
  authDomain: "dayplanner-8cc76.firebaseapp.com",
  databaseURL: "https://dayplanner-8cc76.firebaseio.com",
  projectId: "dayplanner-8cc76",
  storageBucket: "dayplanner-8cc76.appspot.com",
  messagingSenderId: "119333314945",
  appId: "1:119333314945:web:8b92c4b69667307ebd4880",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
