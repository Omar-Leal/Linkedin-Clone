import firebase from 'firebase';
const firebaseKeys =
 {
  apiKey: "AIzaSyDtH5ShinOuWgnA_5SBy5Xd-jvL8O-R588",
  authDomain: "linkedin-clone-4c594.firebaseapp.com",
  projectId: "linkedin-clone-4c594",
  storageBucket: "linkedin-clone-4c594.appspot.com",
  messagingSenderId: "43335466690",
  appId: "1:43335466690:web:7db0205ad7ff9d5f2a055b"
};

const firebaseSDK = firebase.initializeApp( firebaseKeys )
const database = firebase.firestore();
const auth =  firebase.auth();
const firebaseProvider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, database, firebaseProvider, storage  };