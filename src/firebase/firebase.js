import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDXHNaDrFU7FkbYK_Yet8nMuEcW6cZDZr4",
  authDomain: "pryescalab.firebaseapp.com",
  projectId: "pryescalab",
  storageBucket: "pryescalab.appspot.com",
  messagingSenderId: "160036182129",
  appId: "1:160036182129:web:d3cb64d70c9177a0bc63d0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth}