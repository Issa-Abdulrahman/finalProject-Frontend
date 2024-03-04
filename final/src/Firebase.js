
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBZhEzT4L9iuRxHCiHHbiyBM_7BZp__hV4",
  authDomain: "chocopuff-67413.firebaseapp.com",
  projectId: "chocopuff-67413",
  storageBucket: "chocopuff-67413.appspot.com",
  messagingSenderId: "890972683160",
  appId: "1:890972683160:web:e80ca648169149201dc9ed",
  measurementId: "G-YKY6HX46L3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();