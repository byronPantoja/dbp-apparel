import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyB6hPYOw6kRWcK9jlGvr2HLGkCL2wSYn48',
	authDomain: 'dbp-apparel.firebaseapp.com',
	databaseURL: 'https://dbp-apparel.firebaseio.com',
	projectId: 'dbp-apparel',
	storageBucket: 'dbp-apparel.appspot.com',
	messagingSenderId: '485905287141',
	appId: '1:485905287141:web:a2ebe0ee46687e728f510c',
	measurementId: 'G-7TSN7J2VSM',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
