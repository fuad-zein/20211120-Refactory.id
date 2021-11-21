import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZq2MQcghvrEetFXmSNzwCCac1u2UPVcs",
  authDomain: "mini-app-5e843.firebaseapp.com",
  projectId: "mini-app-5e843",
  storageBucket: "mini-app-5e843.appspot.com",
  messagingSenderId: "801993821249",
  appId: "1:801993821249:web:ca8511139d7efe00068ac0",
};

const init = firebase.initializeApp(firebaseConfig);
export const firebaseAuthentication = init.auth();
export const firebaseFirestore = init.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
