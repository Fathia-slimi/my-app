import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore} from"@firebase/firestore";
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyC4-b5NgeY9pxbQpSy7gED5kQFge7fg1_k",
  authDomain: "my-app-be8b4.firebaseapp.com",
  projectId: "my-app-be8b4",
  storageBucket: "my-app-be8b4.appspot.com",
  messagingSenderId: "482704405995",
  appId: "1:482704405995:web:c9758328577f88d23ad5ae",
  measurementId: "G-WZKHC111VZ"
};
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db=getFirestore(app)
export default app

