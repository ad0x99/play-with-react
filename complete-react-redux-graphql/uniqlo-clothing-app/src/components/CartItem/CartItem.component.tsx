import { FC, memo } from 'react';

import { CartItemContainer, Image, ItemDetails } from './CartItem.styles';
import { CartItem as TCartItem } from '../../store/cart/cart.types';

type CartItemProps = {
  cartItem: TCartItem;
};

/**
 * Memoizing cartItem to reduce re-rendering
 * process when we add new items to the checkout
 * list
 */
const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />

      <ItemDetails>
        <h2 className="name">{name}</h2>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
