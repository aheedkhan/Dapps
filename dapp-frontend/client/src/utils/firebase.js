// Dependencies for callable functions.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { fetchFromDB } from "/src/redux/myNFTdataSlice";

//import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
  setDoc,
  arrayUnion,
  onSnapshot,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { logIn, logOut } from "/src/redux/authSlice";
import store from "/src/redux/store";

// A function that toggles the isListed property of a card and updates the firestore NFTs collection.

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

//Auth firebase
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in");

    const userData = {
      name: user.displayName,
      photoURL: user.photoURL,
    };

    store.dispatch(logIn(userData));
  } else {
    store.dispatch(logOut());
    console.log("User is not signed in");
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

function signOutt() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.

      console.log("Sign-out successful.");
    })
    .catch((error) => {
      // An error happened.
      console.log(error.message);
    });
}
//firestore cloud database

async function addMetaDataToDB(objectJson, metahash, imagehash) {
  // Get the current user
  const user = auth.currentUser;
  // Get the document reference
  const docRef = doc(db, "NFTs", user.uid);
  objectJson.metahash = metahash;
  objectJson.imagehash = imagehash;
  objectJson.isListed = false;

  try {
    // Create or overwrite the document with the user's uid and the initial JSON object
    await setDoc(
      docRef,
      {
        uid: user.uid,
      },
      { merge: true }
    );

    // Update the document with the new JSON object
    await updateDoc(docRef, {
      array: arrayUnion(objectJson),
    });

    console.log("Document updated successfully");
  } catch (e) {
    console.error("Error updating document: ", e);
  }
}
// Define the fetchFromDB function
function fetchDB(setData) {
  // Use the optional chaining operator to access the user uid
  const user = auth.currentUser;
  const userUID = user?.uid;
  // Check if the user uid exists
  if (userUID) {
    // Declare an empty array to store the data
    let data = [];
    // Listen to the query snapshot
    onSnapshot(
      query(collection(db, "NFTs"), where("uid", "==", userUID)),
      (querySnapshot) => {
        // Loop through the documents in the snapshot

        querySnapshot.docs.forEach((doc) => {
          // Push the document data to the array
          data.push(doc.data());
        });
        //  console.log(data);
        setData(data);
      }
    );
  } else {
    // Handle the case when the user uid is null
    console.log("No data");
  }
}
////// A function that toggles the isListed property of a card and updates the firestore NFTs collection
// function toggle(data) {

// }
export {
  app,
  auth,
  db,
  storage,
  signinWithGoogle,
  signOutt,
  addMetaDataToDB,
  fetchDB,
};
