import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { UserProps, EventProps } from "@/types";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.dddd,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export const storage = getStorage(app);

export const addRegistrationData = async (userData: UserProps) => {
  try {
    const docRef = await addDoc(collection(db, "members"), userData);
    console.log("Document written with ID: ", docRef.id);
    return true; // Registration successful
  } catch (error) {
    console.error("Error adding document: ", error);
    return false; // Registration failed
  }
};

export const loginWithEmail = async (email: string) => {
  try {
    const membersRef = collection(db, "members"); // Reference to the "members" collection

    // Create a query to find documents where email field matches the provided email
    const q = query(membersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      console.log("User found");
      return true; // Login successful
    } else {
      console.log("User not found");
      return false; // Login failed
    }
  } catch (error) {
    console.error("Error checking user:", error);
    return false; // Login failed
  }
};

export const getMemberCount = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "members"));
    const memberCount = querySnapshot.size;
    return memberCount;
  } catch (error) {
    console.error("Error getting member count:", error);
    return 0;
  }
};

// sign in admin
export const signInAdmin = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Signed in
    const user = userCredential.user;
    return user;
  } catch (error: any) {
    const errorMessage = error.message;
    console.log(errorMessage);
    return false;
  }
};
// add event function (as admin)
export const addEvent = async (eventData: EventProps) => {
  try {
    const docRef = await addDoc(collection(db, "events"), eventData);
    console.log("Event added successfully:", docRef.id);
    return docRef.id; // Return the newly added document's ID
  } catch (error) {
    console.error("Error adding event:", error);
    throw error; // Rethrow the error for handling in the calling component
  }
};

// fetch event function (home page - component)
export const fetchEvents = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "events"));
    const events = querySnapshot.docs.map((doc) => doc.data());
    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};
