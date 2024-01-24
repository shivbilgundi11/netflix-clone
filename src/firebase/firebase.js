import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgi9mD_HpyOs6Axe-f3b1Z79Yy50thefY",
  authDomain: "netflixclone-d1025.firebaseapp.com",
  projectId: "netflixclone-d1025",
  storageBucket: "netflixclone-d1025.appspot.com",
  messagingSenderId: "643792398034",
  appId: "1:643792398034:web:76fffef672160a93a52f0b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
