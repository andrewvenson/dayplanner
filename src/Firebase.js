// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// day planner config
// const firebaseConfig = {
//   apiKey: "AIzaSyARLoLT8277l2UnhnArK958E5m3zQHCvKQ",
//   authDomain: "dayplanner-8cc76.firebaseapp.com",
//   databaseURL: "https://dayplanner-8cc76.firebaseio.com",
//   projectId: "dayplanner-8cc76",
//   storageBucket: "dayplanner-8cc76.appspot.com",
//   messagingSenderId: "119333314945",
//   appId: "1:119333314945:web:8b92c4b69667307ebd4880",
// };

// day planner plus config
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
