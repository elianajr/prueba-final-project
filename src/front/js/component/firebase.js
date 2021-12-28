// Import the functions you need from the SDKs you need

import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";
import "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: process.env.CHAT_API_KEY,
	authDomain: process.env.CHAT_AUTH,
	projectId: process.env.CHAT_PROJECTID,
	storageBucket: process.env.CHAT_STORAGE,
	messagingSenderId: process.env.CHAT_MESSAGINGID,
	appId: process.env.CHAT_APPID,
	measurementId: process.env.CHAT_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db, app };
