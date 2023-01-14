import { useState, useEffect } from 'react';
import { createContext } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/product.utils';

const CategoriesContext = createContext({
  categoriesMap: {},
});

const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const data = await getCategoriesAndDocuments(
        process.env.REACT_APP_FIREBASE_COLLECTION_NAME
      );
      setCategoriesMap(data);
    };

    getCategoriesMap();
  }, []);

  // Migrate products data to firestore
  // useEffect(() => {
  //   addCollectionAndDocuments(
  //     process.env.REACT_APP_FIREBASE_COLLECTION_NAME,
  //     PRODUCTS
  //   );
  // }, [productsMigration.length]);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesContext, CategoriesProvider };
