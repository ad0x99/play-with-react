import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Button } from '../Button/Button.component';
import CartItem from '../CartItem/CartItem.component';
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './CartDropDown.styles';
import { selectCartItems } from '../../store/cart/cart.selector';

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  /**
   * use useCallback to return a memoized function
   * that only changes when navigate has changed
   */
  const goToCheckoutHandler = useCallback(() => {
    navigate('/checkout');
  }, [navigate]);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropDown;
