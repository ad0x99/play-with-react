import { useDispatch, useSelector } from 'react-redux';

import DirectoryItem from '../DirectoryItem/DirectoryItem.component';
import { DirectoryContainer } from './Directory.styles.jsx';
import { selectHomeCategoriesMap } from '../../store/categories/category.selector';
import { useEffect } from 'react';
import { getHomeCategoriesAndDocuments } from '../../utils/firebase/product.utils';
import { setHomeCategoriesMap } from '../../store/categories/category.action';

const Directory = () => {
  const dispatch = useDispatch();
  const homeCategories = useSelector(selectHomeCategoriesMap);

  useEffect(() => {
    const getHomeCategoriesMap = async () => {
      const data = await getHomeCategoriesAndDocuments(
        process.env.REACT_APP_FIREBASE_HOME_CATEGORIES_NAME
      );
      dispatch(setHomeCategoriesMap(data));
    };

    getHomeCategoriesMap();
  }, [dispatch]);

  return (
    <DirectoryContainer>
      {homeCategories.length &&
        homeCategories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
    </DirectoryContainer>
  );
};

export default Directory;
