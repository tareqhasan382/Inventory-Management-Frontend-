import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCD7bg3JuYSgknFuKTSwU4RsdloBSf6exM",
  authDomain: "email-password-auth-b489b.firebaseapp.com",
  projectId: "email-password-auth-b489b",
  storageBucket: "email-password-auth-b489b.appspot.com",
  messagingSenderId: "482724425322",
  appId: "1:482724425322:web:8b4b1cf75b723905316413",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;
