import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBtloFEBGr6Z2hFkT3zr02tgiu5IIyqBkE",
  authDomain: "prom26-62dce.firebaseapp.com",
  projectId: "prom26-62dce",
  storageBucket: "prom26-62dce.firebasestorage.app",
  messagingSenderId: "662057183440",
  appId: "1:662057183440:web:96484f9031cbfb9b3596d5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
  db,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  getDocs
};