import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import CategoryPreview from '../../components/CategoryPreview/CategoryPreview.component';
import Spinner from '../../components/Spinner/Spinner.component';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/category.selector';

const CategoriesPreview = () => {
  const categoriesArray = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesArray).map((title) => {
          const products = categoriesArray[title];

          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
