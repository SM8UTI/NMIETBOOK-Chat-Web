import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArhVBRJkm-h8pyrLMadwf5xLDISNiIFD0",
  authDomain: "nmietbook-chat-10506.firebaseapp.com",
  projectId: "nmietbook-chat-10506",
  storageBucket: "nmietbook-chat-10506.appspot.com",
  messagingSenderId: "459440769823",
  appId: "1:459440769823:web:916e727e715f66df7cfe2a",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const db = getFirestore(app);
