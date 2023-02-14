import {getAuth, initializeAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import firebase from "./firebaseconfig";


let firebaseAuth = initializeAuth(firebase)

firebaseAuth = getAuth();

export {firebaseAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged}