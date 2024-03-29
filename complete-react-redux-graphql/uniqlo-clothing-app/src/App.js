import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Spinner from './components/Spinner/Spinner.component';
import { GlobalStyle } from './global.styles';
import { checkUserSession } from './store/user/user.action';

/**
 * Dynamic import (asynchronous import)
 * Only fetch and render component until it's required
 */
const Navigation = lazy(() =>
  import('./routes/Navigation/Navigation.component')
);
const Home = lazy(() => import('./routes/Home/Home.component'));
const Shop = lazy(() => import('./routes/Shop/Shop.component'));
const Authentication = lazy(() =>
  import('./routes/Authentication/Authentication.component')
);
const Checkout = lazy(() => import('./routes/Checkout/Checkout.component'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
