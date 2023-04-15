// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVukLd9kYt8ZdMlFABDu027nIHQSI7P9U",
  authDomain: "survey-app-64e6f.firebaseapp.com",
  projectId: "survey-app-64e6f",
  storageBucket: "survey-app-64e6f.appspot.com",
  messagingSenderId: "191419324923",
  appId: "1:191419324923:web:0b48a35a01a62fb5c5d35e",
  measurementId: "G-5ZCE1C0N3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);