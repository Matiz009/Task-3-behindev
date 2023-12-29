import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCevZVuYA2S4zL759dDUpL-sE3UFwr_tck",
  authDomain: "chatapp-db1d0.firebaseapp.com",
  projectId: "chatapp-db1d0",
  storageBucket: "chatapp-db1d0.appspot.com",
  messagingSenderId: "613921573644",
  appId: "1:613921573644:web:eeb55f793d713a867e9729",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
