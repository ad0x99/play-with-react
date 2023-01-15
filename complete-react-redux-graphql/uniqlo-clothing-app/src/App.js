import { Routes, Route } from 'react-router-dom';
import Authentication from './routes/Authentication/Authentication.component.jsx';
import Checkout from './routes/Checkout/Checkout.component.jsx';
import Home from './routes/Home/Home.component.jsx';
import Navigation from './routes/Navigation/Navigation.component.jsx';
import Shop from './routes/Shop/Shop.component.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
