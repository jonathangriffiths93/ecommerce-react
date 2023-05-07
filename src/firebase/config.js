
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCQlYM8uXqhcTcKrHZBiaip30GxHeKVg78",
  authDomain: "gamingstore-jgriffiths.firebaseapp.com",
  projectId: "gamingstore-jgriffiths",
  storageBucket: "gamingstore-jgriffiths.appspot.com",
  messagingSenderId: "134134462442",
  appId: "1:134134462442:web:91bc5976e27f9529f4a493"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const initFirebase = () => app