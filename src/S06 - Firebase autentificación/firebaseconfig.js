import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDzD6iwQiELgPYpznVLINs-BdunJNZXGOk",
  authDomain: "curso-react-firebase-4bfdf.firebaseapp.com",
  projectId: "curso-react-firebase-4bfdf",
  storageBucket: "curso-react-firebase-4bfdf.appspot.com",
  messagingSenderId: "443937321729",
  appId: "1:443937321729:web:27c1de3d58995692a1a100",
  measurementId: "G-GZ1QG3939Z"
};

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);

  export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword}