import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDrtD9R8-FDZTzqAC0GQMGoCSSci5b13Ec",
  authDomain: "crud-rtk-e12ea.firebaseapp.com",
  projectId: "crud-rtk-e12ea",
  storageBucket: "crud-rtk-e12ea.appspot.com",
  messagingSenderId: "528498122277",
  appId: "1:528498122277:web:a9a79206ddda84764e69cc"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;