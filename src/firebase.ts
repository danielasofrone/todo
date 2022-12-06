import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';
import { getAuth, GithubAuthProvider } from 'firebase/auth';

initializeApp(firebaseConfig);

export const gitHubProvider = new GithubAuthProvider();
export const auth = getAuth();
