import firebase from "firebase";
// import "firebase";
// import { initializeApp } from 'firebase/app';
import "firebase/firestore";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGLFS1xkoIohg0Zxe6gqQhg5weBnpGHNU",
  authDomain: "teste01-b6002.firebaseapp.com",
  projectId: "teste01-b6002",
  storageBucket: "teste01-b6002.appspot.com",
  messagingSenderId: "413649616047",
  appId: "1:413649616047:web:c0ab5bc4a98b650cf3e85a",
  measurementId: "G-MNKJP5NXHK"
};

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
const Firebase = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(Firebase);
// const db = firebase.firestore();

//const auth = getAuth();

export default {
  Firebase,
  db,
};
