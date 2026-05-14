// ======================================
// FIREBASE PROM26 NUEVO
// ======================================

// CONFIG

const firebaseConfig = {

    apiKey: "AIzaSyBbD3UeqbZvUtvbPh8mWRYw9Ro7hc64sKE",

    authDomain: "prom26-98b1a.firebaseapp.com",

    projectId: "prom26-98b1a",

    storageBucket: "prom26-98b1a.firebasestorage.app",

    messagingSenderId: "12184183881",

    appId: "1:12184183881:web:24197afc1b5e7a211c0b98",

    measurementId: "G-2JTSEJSGTF"

};

// INICIAR FIREBASE

firebase.initializeApp(firebaseConfig);

// DATABASE

const db = firebase.firestore();

// AUTH

const auth = firebase.auth();
