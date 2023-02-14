import {initializeApp} from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyA8drENqMbPOszrsqcZt0hNmwcdTB72gyU",
    authDomain: "instagramclone-35dfa.firebaseapp.com",
    projectId: "instagramclone-35dfa",
    storageBucket: "instagramclone-35dfa.appspot.com",
    messagingSenderId: "822099199978",
    appId: "1:822099199978:web:5db114db36f31eda469493",
    measurementId: "G-G40BTLKEJY"
  };
const firebase =  initializeApp(firebaseConfig);
// if(firebase.apps.length === 0){
//     firebaseApp =  firebase.initializeApp(firebaseConfig)
// }

export default firebase