import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import NewTicket from './pages/NewTicket';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';
import Tickets from './pages/Tickets';
import Ticket from './pages/Ticket';
import { CLIENT_URL } from './utils/constant';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />

          <Routes>
            <Route path={CLIENT_URL.ROOT} element={<Home />} />
            <Route path={CLIENT_URL.LOGIN} element={<Login />} />
            <Route path={CLIENT_URL.REGISTER} element={<Register />} />
            <Route
              path={CLIENT_URL.NEW_TICKET}
              element={
                <PrivateRoute>
                  <NewTicket />
                </PrivateRoute>
              }
            />
            <Route
              path={CLIENT_URL.TICKETS}
              element={
                <PrivateRoute>
                  <Tickets />
                </PrivateRoute>
              }
            />
            <Route
              path={CLIENT_URL.TICKET}
              element={
                <PrivateRoute>
                  <Ticket />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
