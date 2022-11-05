
   // Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBTbL1l43Efh507gL8L7zfY7l4wrdoMRc0",
    authDomain: "twitter-proj-a4311.firebaseapp.com",
    projectId: "twitter-proj-a4311",
    storageBucket: "twitter-proj-a4311.appspot.com",
    messagingSenderId: "1027405030274",
    appId: "1:1027405030274:web:0a2542b2004484d00a659b"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };