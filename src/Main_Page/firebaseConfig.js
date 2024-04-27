import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA3ExZfXhbmA_xlnpk0D2PNqwSKn3ju3P8",
  authDomain: "ipcount-48793.firebaseapp.com",
  projectId: "ipcount-48793",
  storageBucket: "ipcount-48793.appspot.com",
  messagingSenderId: "731061680887",
  appId: "1:731061680887:web:69dfd383e0d362e9c1f1f2",
  measurementId: "G-XZRSQV0LY6",
};

let app;
let db;
let analytics;
try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  analytics = getAnalytics(app);
} catch (error) {
  console.error("Firebase initialization error", error);
}

export default app;
export { db };
