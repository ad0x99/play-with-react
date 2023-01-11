import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { Button } from '../Button/Button.component';
import CartItem from '../CardItem/CardItem.component';
import './CardDropDown.styles.scss';

const CardDropDown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cardItem={item} />
        ))}
      </div>

      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CardDropDown;
