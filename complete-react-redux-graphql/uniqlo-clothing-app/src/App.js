import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home.component.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
