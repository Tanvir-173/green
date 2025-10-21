// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-v_wsXeDXNV1KCLDRJEasrsnSj0l61vg",
  authDomain: "green-90d20.firebaseapp.com",
  projectId: "green-90d20",
  storageBucket: "green-90d20.firebasestorage.app",
  messagingSenderId: "670576332771",
  appId: "1:670576332771:web:bed6c3a41f9e08795c5ad6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);