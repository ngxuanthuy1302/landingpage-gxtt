// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCl6hS1PkfBHBf-SuDLCV4Lev-uEftShCQ',
  authDomain: 'gxtt-data.firebaseapp.com',
  projectId: 'gxtt-data',
  storageBucket: 'gxtt-data.appspot.com',
  messagingSenderId: '674855279228',
  appId: '1:674855279228:web:fb6b80a0ecda523479c7f9',
  measurementId: 'G-VDH1YT27QW',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
