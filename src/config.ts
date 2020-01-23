// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/messaging"
import { FIREBASE_CONFIG , PUBLIC_KEY } from "./env";


// Initialize Firebase
const app = firebase.initializeApp(FIREBASE_CONFIG);

const messaging = app.messaging();
messaging.usePublicVapidKey(PUBLIC_KEY)


export { messaging };