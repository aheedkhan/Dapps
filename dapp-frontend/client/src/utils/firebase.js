// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { logIn, logOut } from "/src/redux/authSlice";
import store from "/src/redux/store";

const firebaseConfig = {
  apiKey: "AIzaSyDIEuOKswlsR-1OVfPrddclrw9I7Z7GH04",
  authDomain: "cryptoclicks-9aa7a.firebaseapp.com",
  projectId: "cryptoclicks-9aa7a",
  storageBucket: "cryptoclicks-9aa7a.appspot.com",
};
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in");

    const userData = {
      name: user.displayName,
      photoURL: user.photoURL,
    };
    store.dispatch(logIn(userData));
  } else {
    console.log("User is not signed in");
    store.dispatch(logOut());
  }
});

function signinWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Signed in with Google");
    })
    .catch((error) => {
      console.log(error.message);
    });
}

export { app, auth, db, storage, signinWithGoogle };
