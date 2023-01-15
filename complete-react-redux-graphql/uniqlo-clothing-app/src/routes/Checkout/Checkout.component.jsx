import { useContext } from 'react';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem.component';
import { CartContext } from '../../context/cart.context';
import { CheckoutContainer, CheckoutHeader, Total } from './Checkout.styles';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <h1>This is Checkout page</h1>
      <CheckoutHeader>
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </CheckoutHeader>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <Total className="total">Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
