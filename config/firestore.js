import {getFirestore, collection, addDoc, getDocs,doc, query,serverTimestamp, setDoc} from "firebase/firestore";
import firebase from "./firebaseconfig";

const db = getFirestore(firebase);

export  {db, collection, addDoc, getDocs, doc, query, serverTimestamp, setDoc};