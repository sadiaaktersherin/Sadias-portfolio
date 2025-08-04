// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDxLlaCDSRZwagQxO5v3nFwVqNhyxJvQY",
  authDomain: "sadias-portfolio.firebaseapp.com",
  projectId: "sadias-portfolio",
  storageBucket: "sadias-portfolio.firebasestorage.app",
  messagingSenderId: "713527967053",
  appId: "1:713527967053:web:353cac9c54952497fc8b04"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firebase Auth
const auth = getAuth(app);

// ✅ Export auth so you can use it in Header.jsx
export { auth };
