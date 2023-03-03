import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/ProductCard/ProductCard.component';
import Spinner from '../../components/Spinner/Spinner.component';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/category.selector';

import { CategoryContainer, CategoryTitle } from './Category.styles';

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const categoriesArray = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesArray[category]);

  useEffect(() => {
    setProducts(categoriesArray[category]);
  }, [category, categoriesArray]);

  return (
    <Fragment>
      <CategoryTitle>{category?.toUpperCase()}</CategoryTitle>

      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
