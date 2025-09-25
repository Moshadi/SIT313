// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// --- Your existing config (unchanged, except storageBucket corrected) ---
const firebaseConfig = {
  apiKey: "AIzaSyDXeRF6yJJ6dHqO8HHIzkMU5dV1lhbBNoM",
  authDomain: "projectweek5-df103.firebaseapp.com",
  projectId: "projectweek5-df103",
  storageBucket: "projectweek5-df103-custom.appspot.com",  // 👈 use your bucket
  messagingSenderId: "338824864505",
  appId: "1:338824864505:web:a74495e29cf55995e67828"
  
};


// --- Init ---
const app = initializeApp(firebaseConfig);

// --- Exports ---
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { serverTimestamp };
