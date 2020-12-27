import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAtcd6sZO0Y8_wdAYZG4YFef1h6vu4_KYU",
    authDomain: "challenge-70dcc.firebaseapp.com",
    projectId: "challenge-70dcc",
    storageBucket: "challenge-70dcc.appspot.com",
    messagingSenderId: "842487793477",
    appId: "1:842487793477:web:d249251de59f1ea9b0a02c",
    measurementId: "G-SJ27QF58B6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};