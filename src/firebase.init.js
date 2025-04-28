

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAudMS7LYichGSp8dFHDBlUW6-bAzul9yo",
  authDomain: "auth-integration-79f75.firebaseapp.com",
  projectId: "auth-integration-79f75",
  storageBucket: "auth-integration-79f75.firebasestorage.app",
  messagingSenderId: "44331771147",
  appId: "1:44331771147:web:1967eeed72c4fa47006e0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)