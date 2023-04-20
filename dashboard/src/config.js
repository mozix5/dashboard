// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA7Jm9NLTNHMPXHAYhxjDPYMVERRUVZFF0",
  authDomain: "dashboard-695ef.firebaseapp.com",
  projectId: "dashboard-695ef",
  storageBucket: "dashboard-695ef.appspot.com",
  messagingSenderId: "1054771177640",
  appId: "1:1054771177640:web:7a8d26cd9fb0f35cd77a9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider};