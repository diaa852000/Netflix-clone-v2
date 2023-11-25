import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCmjXOl4njc-lx9MwjsnH4YRky9kwx9HkU",
    authDomain:"netflix-v2-82d4b.firebaseapp.com",
    projectId: "netflix-v2-82d4b",
    storageBucket:"netflix-v2-82d4b.appspot.com",
    messagingSenderId: "634920442514",
    appId:"1:634920442514:web:acfc4d0f7a10d8370a644b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);