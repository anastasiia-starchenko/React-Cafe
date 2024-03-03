// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_OeE40x3hoguojTpIX0TqQdlyiIE4TOM",
    authDomain: "react-cafe-b79eb.firebaseapp.com",
    databaseURL: "https://react-cafe-b79eb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-cafe-b79eb",
    storageBucket: "react-cafe-b79eb.appspot.com",
    messagingSenderId: "77137612660",
    appId: "1:77137612660:web:891e31ca65b93efced2621",
    measurementId: "G-H75KW8L238"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);