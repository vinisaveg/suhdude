import firebase from 'firebase';

import { environment } from './env';

const firebaseApp = firebase.initializeApp(environment.firebaseConfig);

const database = firebaseApp.firestore();

const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export { auth, googleAuthProvider, githubAuthProvider };

export default database;
