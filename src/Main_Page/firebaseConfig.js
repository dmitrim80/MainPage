// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3ExZfXhbmA_xlnpk0D2PNqwSKn3ju3P8",
  authDomain: "ipcount-48793.firebaseapp.com",
  projectId: "ipcount-48793",
  storageBucket: "ipcount-48793.appspot.com",
  messagingSenderId: "731061680887",
  appId: "1:731061680887:web:69dfd383e0d362e9c1f1f2",
  measurementId: "G-XZRSQV0LY6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
