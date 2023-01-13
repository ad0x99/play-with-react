import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './Checkout.styles.scss';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <h1>This is Checkout page</h1>

      <div className="checkout-header">
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
      </div>

      {cartItems.map((cartItem) => {
        const { id, name, quantity } = cartItem;

        return (
          <div key={id}>
            <h2>{name}</h2>
            <span>{quantity}</span>
            <span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
            <span onClick={() => addItemToCart(cartItem)}>increment</span>
          </div>
        );
      })}

      <span className="total">Total: 0</span>
    </div>
  );
};

export default Checkout;
