import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartItem } from '../../store/cart/cart.types';
import { CheckoutItemContainer, ImageContainer } from './CheckoutItem.styles';

type CheckoutItemProps = {
  cartItem: CartItem;
};

/**
 * Memoizing cartItem to reduce re-rendering
 * process when we take action on the same items
 */
const CheckoutItem: FC<CheckoutItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>

      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
});

export default CheckoutItem;
