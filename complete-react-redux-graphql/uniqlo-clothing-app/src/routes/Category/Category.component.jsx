import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/ProductCard/ProductCard.component';
import { selectCategoriesMap } from '../../store/categories/category.selector';

import { CategoryContainer, CategoryTitle } from './Category.styles.jsx';

const Category = () => {
  const { category } = useParams();
  const categoriesArray = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesArray[category]);

  useEffect(() => {
    setProducts(categoriesArray[category]);
  }, [category, categoriesArray]);

  return (
    <Fragment>
      <CategoryTitle>{category?.toUpperCase()}</CategoryTitle>

      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
