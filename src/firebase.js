import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARQQVutwUG6arJ7fbF58O7vWRl8D36ILE",
  authDomain: "linkedin-clone-9b240.firebaseapp.com",
  projectId: "linkedin-clone-9b240",
  storageBucket: "linkedin-clone-9b240.appspot.com",
  messagingSenderId: "155161459391",
  appId: "1:155161459391:web:c7aab44493d9b74821640a",
  measurementId: "G-6QDK7WKW9K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
