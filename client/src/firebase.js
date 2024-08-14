// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-fba8d.firebaseapp.com",
  projectId: "mern-blog-fba8d",
  storageBucket: "mern-blog-fba8d.appspot.com",
  messagingSenderId: "653407406190",
  appId: "1:653407406190:web:b8614255cffbc69c0f3e7f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


