// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from '@firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function StartFirebase(){
    const firebaseConfig = {
        apiKey: "AIzaSyDBnJBVBxMXet1bj2YG9AlfueMhLLJYiOY",
        authDomain: "quiz-ad3e0.firebaseapp.com",
        databaseURL: "https://quiz-ad3e0-default-rtdb.firebaseio.com",
        projectId: "quiz-ad3e0",
        storageBucket: "quiz-ad3e0.appspot.com",
        messagingSenderId: "686574245036",
        appId: "1:686574245036:web:1002c7a5ce966bf0d03b09"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
    return getDatabase(app);
    }

export default StartFirebase;