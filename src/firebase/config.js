// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from  'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR1ta4zTrPOJEEoNQtRg8TiCPDIPkEeds",
  authDomain: "gestion-a4926.firebaseapp.com",
  projectId: "gestion-a4926",
  storageBucket: "gestion-a4926.appspot.com",
  messagingSenderId: "623370093234",
  appId: "1:623370093234:web:ae821e66f4d0238c71ffab"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );