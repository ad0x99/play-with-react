import { useEffect } from 'react';
import { categories } from './categories';
import { PRODUCTS } from './shop-data';
import { addCollectionAndDocuments } from '../utils/firebase/product.utils';

// Migrate products data to firestore
const DataMigration = () => {
  useEffect(() => {
    addCollectionAndDocuments(
      process.env.REACT_APP_FIREBASE_HOME_CATEGORIES_NAME,
      categories
    );
  }, []);

  // Migrate products data to firestore
  useEffect(() => {
    addCollectionAndDocuments(
      process.env.REACT_APP_FIREBASE_CATEGORIES_NAME,
      PRODUCTS
    );
  }, []);
};

export default DataMigration;
