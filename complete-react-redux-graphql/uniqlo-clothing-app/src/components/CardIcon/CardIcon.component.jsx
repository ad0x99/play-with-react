import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { CartIconContainer, ItemCount, ShoppingIcon } from './CardIcon.styles';

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CardIcon;
