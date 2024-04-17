
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyCtXODv0m4yLx8Q41ESDumA8vG-I8tx-to",
    authDomain: "cat-projector-lp.firebaseapp.com",
    databaseURL: "https://cat-projector-lp-default-rtdb.firebaseio.com",
    projectId: "cat-projector-lp",
    storageBucket: "cat-projector-lp.appspot.com",
    messagingSenderId: "1084631610758",
    appId: "1:1084631610758:web:e67d373764798cec2ba807",
    measurementId: "G-KSHC9KB9B2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a reference to the database service
const database = getDatabase(app);

export { app, database, analytics };
