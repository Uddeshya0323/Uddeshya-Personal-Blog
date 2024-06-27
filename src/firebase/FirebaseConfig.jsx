// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANXBS3cm6VC4NpsXQIeZR5pcIpprsoPUI",
  authDomain: "myblog-287fe.firebaseapp.com",
  projectId: "myblog-287fe",
  storageBucket: "myblog-287fe.appspot.com",
  messagingSenderId: "680569402717",
  appId: "1:680569402717:web:fcbbcc07baac73cfc0e4b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);


export {fireDb, auth, storage}