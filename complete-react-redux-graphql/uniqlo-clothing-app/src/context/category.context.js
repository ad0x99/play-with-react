import { useState, useEffect } from 'react';
import { createContext } from 'react';
import {
  getCategoriesAndDocuments,
  getHomeCategoriesAndDocuments,
} from '../utils/firebase/product.utils';

const CategoriesContext = createContext({
  categoriesMap: {},
  homeCategoriesMap: [],
});

const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const [homeCategoriesMap, setHomeCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const data = await getCategoriesAndDocuments(
        process.env.REACT_APP_FIREBASE_CATEGORIES_NAME
      );
      setCategoriesMap(data);
    };

    getCategoriesMap();
  }, []);

  useEffect(() => {
    const getHomeCategoriesMap = async () => {
      const data = await getHomeCategoriesAndDocuments(
        process.env.REACT_APP_FIREBASE_HOME_CATEGORIES_NAME
      );
      setHomeCategoriesMap(data);
    };

    getHomeCategoriesMap();
  }, []);

  // Migrate products data to firestore
  // useEffect(() => {
  //   addCollectionAndDocuments(
  //     process.env.REACT_APP_FIREBASE_HOME_CATEGORIES_NAME,
  //     categories
  //   );
  // }, []);

  // Migrate products data to firestore
  // useEffect(() => {
  //   addCollectionAndDocuments(
  //     process.env.REACT_APP_FIREBASE_CATEGORIES_NAME,
  //     PRODUCTS
  //   );
  // }, []);

  const value = { categoriesMap, homeCategoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesContext, CategoriesProvider };
