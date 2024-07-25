import { initializeApp, getApp,getApps } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA9WrlSmu71kVUJSy3_yUfSZJHvuEA4gyk",
  authDomain:"scissor-auth-d04c4.firebaseapp.com",
  projectId: "scissor-auth-d04c4",
  storageBucket: "scissor-auth-d04c4.appspot.com",
  messagingSenderId: "834703154056",
  appId: "1:834703154056:web:3e4cd91c167abd0a37b83d",
};

const app =!getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app )
// const analytics = getAnalytics(app);

export{app, auth}