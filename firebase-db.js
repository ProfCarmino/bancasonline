// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFWHYgrvhxzv9kBkPblL4ONniuvQIpgNQ",
    authDomain: "bancasonline-591c8.firebaseapp.com",
    projectId: "bancasonline-591c8",
    storageBucket: "bancasonline-591c8.appspot.com",
    messagingSenderId: "368510678890",
    appId: "1:368510678890:web:23b046fcee9e3c2c7ad713",
    measurementId: "G-W5Z0MQX3Q0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const database = getDatabase(app);

export default database


