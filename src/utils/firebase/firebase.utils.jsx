import { initializeApp } from 'firebase/app'
import {
  getAuth, signInWithRedirect,
  createUserWithEmailAndPassword, signInWithPopup,
  GoogleAuthProvider, signInWithEmailAndPassword,
  signOut, onAuthStateChanged,
} from 'firebase/auth'
import {
  getFirestore, doc, getDoc,
  setDoc, collection, writeBatch,
  query, getDocs
} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyA7xUz1ztxh05aD2Bkc0-Oetkqa-rlMoTU",
  authDomain: "crownclothing-db-e0365.firebaseapp.com",
  projectId: "crownclothing-db-e0365",
  storageBucket: "crownclothing-db-e0365.appspot.com",
  messagingSenderId: "625096670074",
  appId: "1:625096670074:web:d2880cb9eeec7049bc34c3"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt:"select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect=()=> signInWithRedirect(auth, googleProvider)
export const db = getFirestore();



// starting helper function
// the whole helper function nd the main thing they do is they isolate the areas
// that our application interfaces with, things that might change
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd)=>{
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  
    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    })
   await batch.commit();
    console.log('done');
  } 
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
const q = query(collectionRef)


  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();


    acc[title.toLowerCase()] = items
    return acc;
  }, {})
  return categoryMap;
  }

// finishing helper function

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
  if (!userAuth) return;
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
        createdAt,
        ...additionalInformation
      })
    } catch (error) {
      console.log("error creating the user", error.message);

    }
  }
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

 return await createUserWithEmailAndPassword(auth, email, password)

}




export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

 return await signInWithEmailAndPassword(auth, email, password)

}

export const signOutUser = () => {
  signOut(auth)
}

export const onAuthStateChangedListener= (callback)=> onAuthStateChanged(auth, callback)