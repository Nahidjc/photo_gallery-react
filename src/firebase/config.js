import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyBRYix9yAV7h7vLwhI7wUrMZHXctyJx_5Q",
    authDomain: "nahid-photo.firebaseapp.com",
    projectId: "nahid-photo",
    storageBucket: "nahid-photo.appspot.com",
    messagingSenderId: "1000955934751",
    appId: "1:1000955934751:web:7ab66db572b64470753d2a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };