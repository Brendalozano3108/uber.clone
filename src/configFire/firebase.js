// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXN5G97wgt4r9WNh-7W6KSrrxxR8W5Ens",
  authDomain: "uber-395f8.firebaseapp.com",
  projectId: "uber-395f8",
  storageBucket: "uber-395f8.appspot.com",
  messagingSenderId: "493103769921",
  appId: "1:493103769921:web:5912d01992d64c1f15d9c0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth();
//export const googleProvider = new firebase.auth.GoogleAuthProvider();

