// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLsiHWAH_jbl17R7zOYBQMb6aPR_D4Tpc",
  authDomain: "fir-day-1-conceptual.firebaseapp.com",
  projectId: "fir-day-1-conceptual",
  storageBucket: "fir-day-1-conceptual.firebasestorage.app",
  messagingSenderId: "800700742603",
  appId: "1:800700742603:web:56655a9c6701d44725944e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);