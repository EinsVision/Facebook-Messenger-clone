import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyAlox6NFrwxX7AofBKlmFXr7PCPApM75zk",
  authDomain: "facebook-messenger-clone-b8d9f.firebaseapp.com",
  projectId: "facebook-messenger-clone-b8d9f",
  storageBucket: "facebook-messenger-clone-b8d9f.appspot.com",
  messagingSenderId: "281739902360",
  appId: "1:281739902360:web:de20328be8425e93207fed"
});

const db = firebaseApp.firestore();
export default db;
