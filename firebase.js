import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAOpMHE_IIr0U5KTjM-515wVnwqH4B7oiE",
    authDomain: "chat-app-faf21.firebaseapp.com",
    projectId: "chat-app-faf21",
    storageBucket: "chat-app-faf21.appspot.com",
    messagingSenderId: "1091895474813",
    appId: "1:1091895474813:web:ac38c41fed9908c4588f14"
  };

  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
  } else {
    app = firebase.app();
  }
  
  const db = app.firestore();
  const auth = firebase.auth();
  
  export { db, auth };