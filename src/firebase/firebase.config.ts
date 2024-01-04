import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;
