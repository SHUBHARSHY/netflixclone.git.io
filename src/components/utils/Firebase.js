// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhJrbBcQzsX7Ewfu5m9hCQub0FMWlei78",
    authDomain: "netflixwebgpt.firebaseapp.com",
  projectId: "netflixwebgpt",
  storageBucket: "netflixwebgpt.appspot.com",
  messagingSenderId: "658664942464",
  appId: "1:658664942464:web:c74d0ae6681c4440fe2f65",
  measurementId: "G-QYXCHTHE8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()