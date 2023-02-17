import { FC } from 'react';

import { CartItemContainer, Image, ItemDetails } from './CartItem.styles';
import { CartItem as TCartItem } from '../../store/cart/cart.types';

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
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
};

export default CartItem;
