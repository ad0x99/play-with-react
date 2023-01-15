import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { Button, BUTTON_TYPES } from '../Button/Button.component';
import { Footer, Image, ProductCardContainer } from './ProductCard.styles.jsx';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={`${name}`} />

      <Footer>
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </Footer>

      <Button buttonType={BUTTON_TYPES.inverted} onClick={addProductToCart}>
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
