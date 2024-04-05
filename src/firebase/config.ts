// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv0sWSapbJKH6x_lKZb8gHl494-ZcLwEM",
  authDomain: "kenzy-baby-project.firebaseapp.com",
  databaseURL:
    "https://kenzy-baby-project-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "kenzy-baby-project",
  storageBucket: "kenzy-baby-project.appspot.com",
  messagingSenderId: "868832082054",
  appId: "1:868832082054:web:004c63e3b8048fd3f67907",
  measurementId: "G-BDK8YSKCKH",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// const analytics = getAnalytics(app);

const auth = getAuth(app);
const storage = getStorage(app);
const storageRef = ref(storage);
const imageRef = ref(storage, "images");

export { app, auth, storage };
