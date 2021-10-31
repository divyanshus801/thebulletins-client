import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBXQSt_gAjP5iQGs1z563Y2m8Df4fjERbk",
    authDomain: "thebulletins-final.firebaseapp.com",
    projectId: "thebulletins-final",
    storageBucket: "thebulletins-final.appspot.com",
    messagingSenderId: "119279807091",
    appId: "1:119279807091:web:5bb2c53b431f916cee9806"
  };

  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

 export default firebase;