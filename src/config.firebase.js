// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6rSxpVaZ_g8ufsEDU6f771QwDAuRU_po",
  authDomain: "house-app-c0518.firebaseapp.com",
  projectId: "house-app-c0518",
  storageBucket: "house-app-c0518.appspot.com",
  messagingSenderId: "614363723159",
  appId: "1:614363723159:web:897c7151f553c2944340d2",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
