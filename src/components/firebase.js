// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-b-qutnhdfrcTPjKFTvwT2zVikxo_u_A",
  authDomain: "acciones-finocchietti.firebaseapp.com",
  projectId: "acciones-finocchietti",
  storageBucket: "acciones-finocchietti.appspot.com",
  messagingSenderId: "739973366271",
  appId: "1:739973366271:web:f220fa5f7017200b8567ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);