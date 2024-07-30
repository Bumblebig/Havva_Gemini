import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: import.meta.env.VITE_AIDOT_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_AIDOT_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_AIDOT_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_AIDOT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_AIDOT_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_AIDOT_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
