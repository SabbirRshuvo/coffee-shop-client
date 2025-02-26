// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwyoFWVZWA-FU5CKeatNG9njK3EgCCKhA",
  authDomain: "coffee-shop-96b5e.firebaseapp.com",
  projectId: "coffee-shop-96b5e",
  storageBucket: "coffee-shop-96b5e.firebasestorage.app",
  messagingSenderId: "555745784004",
  appId: "1:555745784004:web:357997fc3c5eb35432d991",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
