import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  QueryDocumentSnapshot,
} from 'firebase/firestore';

// Firebase config
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
// Initialize firebase application
initializeApp(firebaseConfig);

// Config Google Authentication
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// Sign in with Google
const auth = getAuth();
const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// Save user info from signing up using Google auth
const db = getFirestore();

export type AdditionalInformation = {
  displayName?: string;
};

export type UserData = {
  createAt: Date;
  displayName: string;
  email: string;
};

const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInfo = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (userAuth) {
    const userDocRef = await doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInfo,
        });
      } catch (error) {
        console.error(
          'An error occurred while creating user from Google authentication',
          error
        );
      }
    }

    return userSnapshot as QueryDocumentSnapshot<UserData>;
  }
};

// Save user info from signing up using email and password
const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (email && password) {
    return await createUserWithEmailAndPassword(auth, email, password);
  }
};

// Sign in user with email and password
const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (email && password) {
    return await signInWithEmailAndPassword(auth, email, password);
  }
};

// Sign out user
const signOutUser = async () => {
  await signOut(auth);
};

// Authentication change listener to keep track user state
const onAuthStateChangedListener = (callback: NextOrObserver<User>) => {
  if (callback) {
    onAuthStateChanged(auth, callback);
  }
};

// Get current user state
const getCurrentUser = async (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};

export {
  auth,
  db,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  signInAuthUserWithEmailAndPassword,
  signOutUser,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  onAuthStateChangedListener,
  getCurrentUser,
};
