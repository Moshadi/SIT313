// src/firebase.js

// Import the Firebase modules you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Firebase config — ensure values match Firebase Console exactly
const firebaseConfig = {
  apiKey: "AIzaSyDXeRF6yJJ6dHqO8HHIzkMU5dV1lhbBNoM",
  authDomain: "projectweek5-df103.firebaseapp.com",
  projectId: "projectweek5-df103",
  storageBucket: "projectweek5-df103.appspot.com",
  messagingSenderId: "338824864565",
  appId: "1:338824864565:web:a744945e29cf55995e6782"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Firebase Auth and Firestore so they can be used in your pages
export const auth = getAuth(app);
export const db = getFirestore(app);
