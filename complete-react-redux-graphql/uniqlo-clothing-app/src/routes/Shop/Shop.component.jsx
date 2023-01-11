import { useContext } from 'react';
import { ProductContext } from '../../context/product.context';

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      {products.map(({ id, title, items }) => (
        <div key={id}>
          <h1>{title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
