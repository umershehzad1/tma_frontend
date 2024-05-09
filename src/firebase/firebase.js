// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOaTWc3_ZPfz3N600PRBtgNJUhp9lGIG0",
  authDomain: "tma-global.firebaseapp.com",
  projectId: "tma-global",
  storageBucket: "tma-global.appspot.com",
  messagingSenderId: "6123555462",
  appId: "1:6123555462:web:b0184c3ec86a5d02f3df07",
  measurementId: "G-B64EDD34R1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }; 
