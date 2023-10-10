// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDAfDCKl8Jor8wgh-NUnlYDixsgagn74w",
  authDomain: "datosprofesionales-dccc9.firebaseapp.com",
  projectId: "datosprofesionales-dccc9",
  storageBucket: "datosprofesionales-dccc9.appspot.com",
  messagingSenderId: "729887288274",
  appId: "1:729887288274:web:6621401e6bd0542159f60b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FirebaseApp);