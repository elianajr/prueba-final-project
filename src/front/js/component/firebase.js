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
	apiKey: "AIzaSyDq7NWmATJzpPyJYDXpQgI2FINYJJt6HTg",
	authDomain: "my-aquachat.firebaseapp.com",
	projectId: "my-aquachat",
	storageBucket: "my-aquachat.appspot.com",
	messagingSenderId: "200451972610",
	appId: "1:200451972610:web:d21e359b03ad5d9aa2911b",
	measurementId: "G-C6E03FEXSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db, app };
