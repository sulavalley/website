import Rebase from 're-base';
import firebase from 'firebase';
import { FirebaseConfig } from './config/dev';

const firebaseApp = firebase.initializeApp(FirebaseConfig);

const base = Rebase.createClass(firebaseApp.database());

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export default base;
