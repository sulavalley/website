import Rebase from 're-base';
import firebase from 'firebase';
import { FirebaseConfig } from './config/dev';

const firebaseApp = firebase.initializeApp(FirebaseConfig);
export const database = firebaseApp.database();

const base = Rebase.createClass(database);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export default base;
