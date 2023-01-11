import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';

import './CardIcon.styles.scss';

const CardIcon = () => {
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CardIcon;
