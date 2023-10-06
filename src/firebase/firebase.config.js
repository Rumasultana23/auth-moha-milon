// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmjP6dVicIBGA2j5HE6jvgjsCcDbHZGg8",
  authDomain: "auth-moha-milon-5433b.firebaseapp.com",
  projectId: "auth-moha-milon-5433b",
  storageBucket: "auth-moha-milon-5433b.appspot.com",
  messagingSenderId: "1016497058859",
  appId: "1:1016497058859:web:7f06c46b4b2924602ae66e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
