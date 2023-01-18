import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import CategoryPreview from '../../components/CategoryPreview/CategoryPreview.component';
import { selectCategoriesMap } from '../../store/categories/category.selector';

const CategoriesPreview = () => {
  const categoriesArray = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesArray).map((title) => {
        const products = categoriesArray[title];

        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
