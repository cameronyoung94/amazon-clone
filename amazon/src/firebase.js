// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDo6RiTCu81kjLAU2PKfqTlmQZKdVFv6Wg",
  authDomain: "clone-31ca3.firebaseapp.com",
  projectId: "clone-31ca3",
  storageBucket: "clone-31ca3.appspot.com",
  messagingSenderId: "651255539899",
  appId: "1:651255539899:web:30c269e1ca02a1983fe19e",
  measurementId: "G-BZHRH71C2C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}


