import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAk1AzeAyLsBXsYI1FRTJ7lhHXBp9EG09s",
  authDomain: "daysofcode-react-5.firebaseapp.com",
  projectId: "daysofcode-react-5",
  storageBucket: "daysofcode-react-5.appspot.com",
  messagingSenderId: "916400410631",
  appId: "1:916400410631:web:3902abfaf8596e0b131aa2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
