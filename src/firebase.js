import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCFAydVacjjCy8wXMHPOPD2etDEQoisD64",
    authDomain: "challenge-3865e.firebaseapp.com",
    databaseURL: "https://challenge-3865e.firebaseio.com",
    projectId: "challenge-3865e",
    storageBucket: "challenge-3865e.appspot.com",
    messagingSenderId: "601201887419",
    appId: "1:601201887419:web:9650eed0aab2183142819e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };