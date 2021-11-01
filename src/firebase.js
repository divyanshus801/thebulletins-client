import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDKfqUD1Pc-H5AdEuwJozBGrgYIJp0bvaI",
  authDomain: "dev-test-581be.firebaseapp.com",
  projectId: "dev-test-581be",
  storageBucket: "dev-test-581be.appspot.com",
  messagingSenderId: "697068624992",
  appId: "1:697068624992:web:5cd673c7fcf904b765f705"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;