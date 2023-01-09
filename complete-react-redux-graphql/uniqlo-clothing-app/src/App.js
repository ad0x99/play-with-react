import { Routes, Route } from 'react-router-dom';
import Authentication from './routes/Authentication/Authentication.component.jsx';
import Home from './routes/Home/Home.component.jsx';
import Navigation from './routes/Navigation/Navigation.component.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
