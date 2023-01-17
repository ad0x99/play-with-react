import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setCategoriesMap } from '../../store/categories/category.action';
import { getCategoriesAndDocuments } from '../../utils/firebase/product.utils';
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview.component';
import Category from '../Category/Category.component';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const data = await getCategoriesAndDocuments(
        process.env.REACT_APP_FIREBASE_CATEGORIES_NAME
      );
      dispatch(setCategoriesMap(data));
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
