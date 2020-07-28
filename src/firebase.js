import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB88ea76QtT8yXiAkfrpUyP9bYXjWpwG44",
  authDomain: "tinder-clone-f6eb4.firebaseapp.com",
  databaseURL: "https://tinder-clone-f6eb4.firebaseio.com",
  projectId: "tinder-clone-f6eb4",
  storageBucket: "tinder-clone-f6eb4.appspot.com",
  messagingSenderId: "481381246268",
  appId: "1:481381246268:web:1f83c96ad3fd02e14faa39",
  measurementId: "G-27GD9NE9SV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;