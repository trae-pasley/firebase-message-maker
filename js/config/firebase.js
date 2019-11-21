import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCl-504mp4moA-jNbznfHI_MlrkOjOZsss",
    authDomain: "message-maker-ea728.firebaseapp.com",
    databaseURL: "https://message-maker-ea728.firebaseio.com",
    projectId: "message-maker-ea728",
    storageBucket: "message-maker-ea728.appspot.com",
    messagingSenderId: "1050658907728",
    appId: "1:1050658907728:web:55dc2f7b2b14531ff51355",
    measurementId: "G-VG2CXW5YKY"
  };

firebase.initializeApp(firebaseConfig);
firebase.firstone();
  
export default firebase;

