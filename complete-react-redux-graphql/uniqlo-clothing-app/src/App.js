import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home.component.jsx';
import Navigation from './routes/Navigation/Navigation.component.jsx';
import SignIn from './routes/SignIn/SignIn.component.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
