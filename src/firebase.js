
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { firebaseConfig } from "../firebase-config";
import { getFirestore } from "firebase/firestore";

export const provider = new GoogleAuthProvider();

export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);

export const firestore = getFirestore(firebaseApp);