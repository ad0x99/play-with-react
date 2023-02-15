import {
  collection,
  doc,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

import { db } from './firebase.utils';
import {
  Category,
  HomeCategory,
} from './../../store/categories/category.types';

type ObjectToAdd = {
  title: string;
};

// Migrate products data to firestore
const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
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
const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(
    db,
    process.env.REACT_APP_FIREBASE_CATEGORIES_NAME as string
  );
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category
  );
};

const getHomeCategoriesAndDocuments = async (): Promise<HomeCategory[]> => {
  const collectionRef = collection(
    db,
    process.env.REACT_APP_FIREBASE_HOME_CATEGORIES_NAME as string
  );
  const q = query(collectionRef);

  const categoriesList: HomeCategory[] = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.docs.reduce((_, docSnapshot) => {
    const data = docSnapshot.data() as HomeCategory;
    return categoriesList.push(data);
  }, {});

  return categoriesList;
};

export {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
  getHomeCategoriesAndDocuments,
};
