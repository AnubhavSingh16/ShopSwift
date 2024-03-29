// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgPtqMuVG8VK8nwq9ypL8uKcrtVqyTmFU",
  authDomain: "ecomm2-4b9ef.firebaseapp.com",
  projectId: "ecomm2-4b9ef",
  storageBucket: "ecomm2-4b9ef.appspot.com",
  messagingSenderId: "1238479863",
  appId: "1:1238479863:web:220152554e30ba276b74f2",
  measurementId: "G-LKW5V91Q05"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth };
