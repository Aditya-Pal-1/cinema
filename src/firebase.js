import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA6sErqQ410Hv5lF3ZmwGn0SkuK6CtrQV8",
    authDomain: "cinema-bcee4.firebaseapp.com",
    projectId: "cinema-bcee4",
    storageBucket: "cinema-bcee4.appspot.com",
    messagingSenderId: "763553261156",
    appId: "1:763553261156:web:16751bdad6b6e8a348a171"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);

  export const db = getFirestore(app);