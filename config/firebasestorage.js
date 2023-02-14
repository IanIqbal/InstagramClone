import firebase from "./firebaseconfig";
import {getStorage} from "firebase/storage"

const storage = getStorage(firebase)

export default storage