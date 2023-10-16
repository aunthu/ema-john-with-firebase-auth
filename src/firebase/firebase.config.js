// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDn2nmqJPHqESO3CGRvPbQJ5Yc49ECvYEM",
    authDomain: "ema-john-with-firebase-a-b4c03.firebaseapp.com",
    projectId: "ema-john-with-firebase-a-b4c03",
    storageBucket: "ema-john-with-firebase-a-b4c03.appspot.com",
    messagingSenderId: "148157309071",
    appId: "1:148157309071:web:34e70241e18f6e181710fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;