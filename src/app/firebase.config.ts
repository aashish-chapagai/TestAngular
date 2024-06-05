import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXtNJV-qyZqfreKW5gWUGQBFW7xx5mBfE",
  authDomain: "movies-24239.firebaseapp.com",
  projectId: "movies-24239",
  storageBucket: "movies-24239.appspot.com",
  messagingSenderId: "100581025544",
  appId: "1:100581025544:web:2fc680dddf5c04c9132ebd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);