import { useEffect } from 'react';
import { categories } from './categories';
import { PRODUCTS } from './shop-data';
import { addCollectionAndDocuments } from '../utils/firebase/product.utils';

// Migrate products data to firestore
const DataMigration = () => {
  useEffect(() => {
    addCollectionAndDocuments(
      process.env.REACT_APP_FIREBASE_HOME_CATEGORIES_NAME as string,
      categories
    );
  }, []);

  // Migrate products data to firestore
  useEffect(() => {
    addCollectionAndDocuments(
      process.env.REACT_APP_FIREBASE_CATEGORIES_NAME as string,
      PRODUCTS
    );
  }, []);
};

export default DataMigration;
