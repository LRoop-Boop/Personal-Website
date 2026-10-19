
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Keep your existing Firebase configuration here
  apiKey: "AIzaSyBjm6I1SBHE1TK6dzr2BZ1x2Ky73LlETIk",
  authDomain: "personal-website-e4675.firebaseapp.com",
  projectId: "personal-website-e4675",
  storageBucket: "personal-website-e4675.firebasestorage.app",
  messagingSenderId: "999986286083",
  appId: "1:999986286083:web:f9097c72ceb8d645f20836",
  measurementId: "G-2VRDCSQ46S",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Analytics is browser-only; initialize it when supported.
if (typeof window !== "undefined") {
  getAnalytics(app);
}
