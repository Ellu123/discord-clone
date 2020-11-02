import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDNjm0ouvreh0EzBKKfUS_V0vpHR_Ig_BM",
    authDomain: "discord-clone-6dad0.firebaseapp.com",
    databaseURL: "https://discord-clone-6dad0.firebaseio.com",
    projectId: "discord-clone-6dad0",
    storageBucket: "discord-clone-6dad0.appspot.com",
    messagingSenderId: "447648346034",
    appId: "1:447648346034:web:9add4d7679a0877f93feab",
    measurementId: "G-WZL25V9D36"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;