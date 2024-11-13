
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6EMMPEwTdFUuPc2meXOMq_s-1et1FDcE",
  authDomain: "ebook-3607b.firebaseapp.com",
  projectId: "ebook-3607b",
  storageBucket: "ebook-3607b.firebasestorage.app",
  messagingSenderId: "1046427073229",
  appId: "1:1046427073229:web:114c7f13006442e9188784",
  measurementId: "G-73FYG9YHCJ"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const analytics = getAnalytics(app);

export default app;