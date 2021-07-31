import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-aaKOWaNQyClMLvPpE6_Kr_7z0GR8OLQ",
  authDomain: "clone-c458f.firebaseapp.com",
  projectId: "clone-c458f",
  storageBucket: "clone-c458f.appspot.com",
  messagingSenderId: "114674491712",
  appId: "1:114674491712:web:e0b29aa2f532a44e26daa5",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
