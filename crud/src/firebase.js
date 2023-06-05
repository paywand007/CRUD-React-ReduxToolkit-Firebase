import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJmIwaYM9rz0rDYYTXYU35qYfXIS9waf8",
  authDomain: "crud-23553.firebaseapp.com",
  projectId: "crud-23553",
  storageBucket: "crud-23553.appspot.com",
  messagingSenderId: "1088457603685",
  appId: "1:1088457603685:web:7a33183209214abac1a48c",
  measurementId: "G-3EN6WRND6G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;