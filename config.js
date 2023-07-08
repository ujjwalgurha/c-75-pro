import firebase from "firebase";
require("@firebase/firestore");

 
  const firebaseConfig = {
    apiKey: "AIzaSyA6VVCipc-qVMmJ2wPcDrjkoY0eFkiNVdc",
    authDomain: "c71-project-hw.firebaseapp.com",
    projectId: "c71-project-hw",
    storageBucket: "c71-project-hw.appspot.com",
    messagingSenderId: "575865432354",
    appId: "1:575865432354:web:5a0c7010077ce1e58fdd7b"
  }


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
