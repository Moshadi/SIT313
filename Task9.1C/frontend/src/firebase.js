import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDXeRF6yJJ6dHqO8HHIzkMU5dV1lhbBNoM",
  authDomain: "projectweek5-df103.firebaseapp.com",
  databaseURL: "https://projectweek5-df103-default-rtdb.firebaseio.com",
  projectId: "projectweek5-df103",
  storageBucket: "projectweek5-df103.firebasestorage.app",
  messagingSenderId: "338824864505",
  appId: "1:338824864505:web:a74495e29cf55995e67828",
  measurementId: "G-Z0ZJWJ9DV5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);




