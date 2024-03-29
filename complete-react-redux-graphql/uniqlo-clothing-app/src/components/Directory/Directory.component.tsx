import { useDispatch, useSelector } from 'react-redux';

import DirectoryItem from '../DirectoryItem/DirectoryItem.component';
import { DirectoryContainer } from './Directory.styles';
import { selectHomeCategoriesArray } from '../../store/categories/category.selector';
import { useEffect } from 'react';
import { getHomeCategoriesAndDocuments } from '../../utils/firebase/product.utils';
import { fetchHomeCategoriesSuccess } from '../../store/categories/category.action';

const Directory = () => {
  const dispatch = useDispatch();
  const homeCategories = useSelector(selectHomeCategoriesArray);

  useEffect(() => {
    const getHomeCategoriesArray = async () => {
      const data = await getHomeCategoriesAndDocuments();
      dispatch(fetchHomeCategoriesSuccess(data));
    };

    getHomeCategoriesArray();
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
