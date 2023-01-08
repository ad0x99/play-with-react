import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as UniqloLogo } from '../../assets/uniqlo.svg';
import './Navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <UniqloLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
