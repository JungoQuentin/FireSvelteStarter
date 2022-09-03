import { Timestamp, updateDoc, doc, setDoc, collection, addDoc } from 'firebase/firestore';

// set document "ID" in "collection"
await setDoc(doc(db, 'collection_name', 'ID'), {
	stringExample: 'Hello world!',
	booleanExample: true,
	numberExample: 3.14159265,
	dateExample: Timestamp.fromDate(new Date('December 10, 1815')),
	timestamp: serverTimestamp(),
	arrayExample: [5, true, 'hello'],
	nullExample: null,
	objectExample: {
		a: 5,
		b: {
			nested: 'foo'
		}
	}
});

// Add a new document with a generated id.
const docRef = await addDoc(collection(db, 'cities'), {
	name: 'Tokyo',
	country: 'Japan'
});
console.log('Document written with ID: ', docRef.id);

// Create an initial document to update.
const frankDocRef = doc(db, 'users', 'frank');
await setDoc(frankDocRef, {
	name: 'Frank',
	favorites: { food: 'Pizza', color: 'Blue', subject: 'recess' },
	age: 12
});
// To update age and favorite color:
await updateDoc(frankDocRef, {
	age: 13,
	'favorites.color': 'Red'
});
