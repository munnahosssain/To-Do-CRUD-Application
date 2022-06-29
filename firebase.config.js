import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBNHbw8Z9ZFt4stkxcbi1d74gYk-eQirP0",
    authDomain: "todo-naive-app.firebaseapp.com",
    projectId: "todo-naive-app",
    storageBucket: "todo-naive-app.appspot.com",
    messagingSenderId: "779137282723",
    appId: "1:779137282723:web:645977bdd7ef20e96cc516"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);