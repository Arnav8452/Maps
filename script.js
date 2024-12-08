// Import Firebase Modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as firebaseSignOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqF5MOmgFICyWKaBgj2DKN7B7He5VFwKc",
  authDomain: "plannet-ae327.firebaseapp.com",
  projectId: "plannet-ae327",
  storageBucket: "plannet-ae327.appspot.com",
  messagingSenderId: "794674013856",
  appId: "1:794674013856:web:2eb1fe687df4eded6acbc5",
  measurementId: "G-J2Y1QJ6GVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', (event) => {
// Get reference to the auth button
const authButton = document.getElementById("signInButton");
const signInText = document.getElementById("signInText");

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    // If user is logged in, update button text and functionality
    signInText.textContent = 'Sign Out';  // Change button text to "Sign Out"
    authButton.removeEventListener('click', signIn);  // Remove the sign-in listener
    authButton.addEventListener('click', signOut);    // Add the sign-out listener
  } else {
    // If user is logged out, update button text and functionality
    signInText.textContent = 'Sign In';  // Change button text to "Sign In"
    authButton.removeEventListener('click', signOut); // Remove the sign-out listener
    authButton.addEventListener('click', signIn);     // Add the sign-in listener
  }
});
 // Function to sign the user in (using Google Sign-In for example)
 function signIn() {

  }
// Function to sign the user out
function signOut() {
    firebaseSignOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  }
});
