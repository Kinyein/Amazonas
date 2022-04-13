// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMmBQY4V6vNPn8uOhtUdRJ0PhNTqHfGlI",
    authDomain: "asproyect-77899.firebaseapp.com",
    projectId: "asproyect-77899",
    storageBucket: "asproyect-77899.appspot.com",
    messagingSenderId: "280308355141",
    appId: "1:280308355141:web:0e4db6fb1276ce1ae8132c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const facebook = new FacebookAuthProvider()
const dataBase = getFirestore()

export {
    app,
    google, 
    facebook,
    dataBase
}