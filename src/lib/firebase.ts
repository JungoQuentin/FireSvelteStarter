import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	// TODO add firebase project's config
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
