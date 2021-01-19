import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDgHR3MiT_zPFwiz9rw8sgKq53uBGOCeQM",
    authDomain: "gallery-32740.firebaseapp.com",
    projectId: "gallery-32740",
    storageBucket: "gallery-32740.appspot.com",
    messagingSenderId: "696821708512",
    appId: "1:696821708512:web:d95c88356eca1769110285"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const authService = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, authService, timestamp };