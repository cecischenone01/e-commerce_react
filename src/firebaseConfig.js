import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, signInWithEmailAndPassword} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCDhbJ_hBZG13RyFuYK5ydsM2XWNXKQ-Oc",
  authDomain: "merceria-nevilan.firebaseapp.com",
  projectId: "merceria-nevilan",
  storageBucket: "merceria-nevilan.appspot.com",
  messagingSenderId: "680225014362",
  appId: "1:680225014362:web:fce34d3e34c2725f6a4e63",
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)
const auth = getAuth(app)

export const signIn = async({email,password})=>{
  return await signInWithEmailAndPassword(auth, email, password)
}
