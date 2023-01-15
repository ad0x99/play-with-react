import { useContext, useEffect, useState } from 'react';
import DirectoryItem from '../DirectoryItem/DirectoryItem.component';
import { DirectoryContainer } from './Directory.styles.jsx';
import { CategoriesContext } from '../../context/category.context.js';

const Directory = () => {
  const { homeCategoriesMap } = useContext(CategoriesContext);
  const [homeCategories, setHomeCategories] = useState([]);

  useEffect(() => {
    setHomeCategories(homeCategoriesMap);
  }, [homeCategoriesMap]);

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
