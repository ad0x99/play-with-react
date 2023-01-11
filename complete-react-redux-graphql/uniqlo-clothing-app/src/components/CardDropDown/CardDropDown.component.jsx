import { Button } from '../Button/Button.component';
import './CardDropDown.styles.scss';

const CardDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="card-items"></div>
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CardDropDown;
