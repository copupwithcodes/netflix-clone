import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBWijoQbyX72_e6ZK_aw1gIJo8NIzbM8nE",
  authDomain: "netflix-15d35.firebaseapp.com",
  projectId: "netflix-15d35",
  storageBucket: "netflix-15d35.appspot.com",
  messagingSenderId: "754999004729",
  appId: "1:754999004729:web:7f2174d0e74b9673fb87e8"
};

 const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export {firebase} ;