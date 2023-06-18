import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBaUpTxXjFsDj09V9yV6ZLj2dYZHFvf5dI",
  authDomain: "tiktok---jornada-5dd51.firebaseapp.com",
  projectId: "tiktok---jornada-5dd51",
  storageBucket: "tiktok---jornada-5dd51.appspot.com",
  messagingSenderId: "1032011795702",
  appId: "1:1032011795702:web:b9d1bfcf9dcadfbb8df0d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;