import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCT0WcVhwL89c9Dfp2nebbJgreWfzpfprM",
    authDomain: "enid-s-kitchen.firebaseapp.com",
    projectId: "enid-s-kitchen",
    storageBucket: "enid-s-kitchen.appspot.com",
    messagingSenderId: "551091204135",
    appId: "1:551091204135:web:e025a803b2955548649e02"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig)

  //initialize services
  const projectFirestore = firebase.firestore()

  export { projectFirestore }