import { initializeApp } from 'firebase/app'
import{ getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider }from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyA7xUz1ztxh05aD2Bkc0-Oetkqa-rlMoTU",
  authDomain: "crownclothing-db-e0365.firebaseapp.com",
  projectId: "crownclothing-db-e0365",
  storageBucket: "crownclothing-db-e0365.appspot.com",
  messagingSenderId: "625096670074",
  appId: "1:625096670074:web:d2880cb9eeec7049bc34c3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt:"select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef)
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());
  
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log("error creating the user", error.message);

    }
  }
  return userDocRef;
}