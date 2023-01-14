import {
  collection,
  doc,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';
import { db } from './firebase.utils';

// Migrate products data to firestore
const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  console.log('Processing Data Migration...');
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('Finished Data Migration!');
};

// Get products data from firestore
const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(
    db,
    process.env.REACT_APP_FIREBASE_COLLECTION_NAME
  );
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMapper = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();

    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMapper;
};

export { addCollectionAndDocuments, getCategoriesAndDocuments };
