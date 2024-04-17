// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmqD3S1AaOB5AdQXdNqV6HUGX7jvcY9BE",
    authDomain: "smartshop-e2699.firebaseapp.com",
    projectId: "smartshop-e2699",
    storageBucket: "smartshop-e2699.appspot.com",
    messagingSenderId: "915719376734",
    appId: "1:915719376734:web:966dbaa861132fe12789cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }