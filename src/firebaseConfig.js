// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAssPV3ofRuiPYfjMyp4YYQxIW-8pF_Was",
  authDomain: "hombre-libre.firebaseapp.com",
  projectId: "hombre-libre",
  storageBucket: "hombre-libre.firebasestorage.app",
  messagingSenderId: "679180574777",
  appId: "1:679180574777:web:3f8577fbf4499c3cb2ede8",
  measurementId: "G-57XL8Z57SM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exportar la base de datos Firestore
const db = getFirestore(app);
export { db };
