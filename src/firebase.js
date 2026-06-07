// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBj00l7DwRvmgqK66Nv0vd08dvW-70r_IQ",
  authDomain: "daily-bread-6317a.firebaseapp.com",
  projectId: "daily-bread-6317a",
  storageBucket: "daily-bread-6317a.appspot.com",
  messagingSenderId: "237407645557",
  appId: "1:237407645557:web:44374ddc3fe9f51b4cad3c",
  measurementId: "G-K4CGTW1490",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore (DATABASE)
export const db = getFirestore(app);

// Analytics (OPTIONAL)
const analytics = getAnalytics(app);