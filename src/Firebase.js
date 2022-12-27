import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-I21aPfKwsKKfszf1let_xEVp_fKV2KE",
  authDomain: "bingebro-mok.firebaseapp.com",
  projectId: "bingebro-mok",
  storageBucket: "bingebro-mok.appspot.com",
  messagingSenderId: "734539073175",
  appId: "1:734539073175:web:d07ec1afba313f5b58cbd2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
