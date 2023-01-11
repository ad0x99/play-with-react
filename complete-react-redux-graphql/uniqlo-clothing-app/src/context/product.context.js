import { useState } from 'react';
import { createContext } from 'react';
import { ITEMS } from '../data/shop-data';

const ProductContext = createContext({
  products: [],
});

const ProductsProvider = ({ children }) => {
  const [products, setProduct] = useState(ITEMS);
  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export { ProductContext, ProductsProvider };
