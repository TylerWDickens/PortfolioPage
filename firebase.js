// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrsmDHBCqXRl_2NOF1f3oFfCXvrMWdoR0",
    authDomain: "portfoliopage-bf160.firebaseapp.com",
    projectId: "portfoliopage-bf160",
    storageBucket: "portfoliopage-bf160.appspot.com",
    messagingSenderId: "911510036212",
    appId: "1:911510036212:web:da22a4e45de26c0d8788a1",
    measurementId: "G-H5W7DDK9VL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);