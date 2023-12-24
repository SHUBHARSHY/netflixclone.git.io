// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyvgc0WOEL57Q-d6CSrr4IRUw4-mtymX0",
  authDomain: "netflixapp-580.firebaseapp.com",
  projectId: "netflixapp-580",
  storageBucket: "netflixapp-580.appspot.com",
  messagingSenderId: "675096578174",
  appId: "1:675096578174:web:8cc6b72dd1aa7bf5c9302f",
  measurementId: "G-LHT29CWNVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()