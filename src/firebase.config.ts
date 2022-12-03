import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'todo-61a38.firebaseapp.com',
  projectId: 'todo-61a38',
  storageBucket: 'todo-61a38.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: 'G-Y1TRRVMPGT',
};

export const app = () => {
  initializeApp(firebaseConfig);
};
