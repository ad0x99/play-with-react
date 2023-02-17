import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as UniqloLogo } from '../../assets/uniqlo.svg';
import CartDropDown from '../../components/CartDropDown/CartDropDown.component';
import CartIcon from '../../components/CartIcon/CartIcon.component';
import {
  NavigationContainer,
  LogoContainer,
  NavLinkContainer,
  NavLink,
} from './Navigation.styles.js';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <UniqloLogo className="logo" />
        </LogoContainer>

        <NavLinkContainer>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}

          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
