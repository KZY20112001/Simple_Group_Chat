// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAhFMehsd6NmqPR7gJa04sGBeMx-jYR6eY',
  authDomain: 'chat-app-31445.firebaseapp.com',
  projectId: 'chat-app-31445',
  storageBucket: 'chat-app-31445.appspot.com',
  messagingSenderId: '510124151651',
  appId: '1:510124151651:web:b2dd0bb78a1bb53a5f3956',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
