// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlNB2mOExgAWXAmsyxanAuU8vbJTco2Qg",
  authDomain: "netflixgpt-48163.firebaseapp.com",
  projectId: "netflixgpt-48163",
  storageBucket: "netflixgpt-48163.appspot.com",
  messagingSenderId: "299878149998",
  appId: "1:299878149998:web:f7139eae58511f4d62db7f",
  measurementId: "G-CGJSECGDR4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
