import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDNoXYFUNAPcT1dowd20aDKeiWdImeOyvQ",
  authDomain: "thebulletins-latest.firebaseapp.com",
  projectId: "thebulletins-latest",
  storageBucket: "thebulletins-latest.appspot.com",
  messagingSenderId: "370045202163",
  appId: "1:370045202163:web:b6058644d5c231c93d5186"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;