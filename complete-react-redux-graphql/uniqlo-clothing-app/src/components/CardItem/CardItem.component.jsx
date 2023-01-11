import './CardItem.styles.scss';

const CartItem = ({ cardItem }) => {
  const { name, quantity, imageUrl, price } = cardItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />

      <div className="item-details">
        <h2 className="name">{name}</h2>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
