// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC5TGQNO4-S2nf-EK003ZGvqwBKcAdVdRo',
  authDomain: 'general-conference-oct2025.firebaseapp.com',
  projectId: 'general-conference-oct2025',
  storageBucket: 'general-conference-oct2025.firebasestorage.app',
  messagingSenderId: '737292408179',
  appId: '1:737292408179:web:99609db1c25609df1d6106',
  measurementId: 'G-MSTKD0TM1M',
};

// Initialize Firebase

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
// const analytics = getAnalytics(app);
