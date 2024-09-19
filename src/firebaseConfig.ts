// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAPSC8QSdguA7AhC1kdK9XtSfIzE2qmGZY',
  authDomain: 'gxtt-landing.firebaseapp.com',
  projectId: 'gxtt-landing',
  storageBucket: 'gxtt-landing.appspot.com',
  messagingSenderId: '91511929984',
  appId: '1:91511929984:web:a8cebf6417c8cbb8143a65',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const database = getDatabase(app)
