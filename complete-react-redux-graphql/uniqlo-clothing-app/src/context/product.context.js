import { useState } from 'react';
import { createContext } from 'react';
import { PRODUCTS } from '../data/shop-data';

const ProductContext = createContext({
  products: [],
});

const ProductsProvider = ({ children }) => {
  const [products, setProduct] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export { ProductContext, ProductsProvider };
