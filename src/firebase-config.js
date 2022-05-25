import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCfUVWbs_D9XZPjIrlgi6aYIubwmbBBYdI",
    authDomain: "tv-show-app-c32f6.firebaseapp.com",
    projectId: "tv-show-app-c32f6",
    storageBucket: "tv-show-app-c32f6.appspot.com",
    messagingSenderId: "556685214416",
    appId: "1:556685214416:web:12889d58a8a86b23a214d5",
    measurementId: "G-PGY8NN7C76"
  };

  const app = initializeApp(firebaseConfig)

  export const auth = getAuth(app);