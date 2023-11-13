import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { GithubProvider } from './context/GithubContext/GithubContext';
import { AlertProvider } from './context/Alert/AlertContext';
import Alert from './components/Layout/Alert';
import UserDetail from './components/Users/UserDetail';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div
            className="flex flex-col 
      justify-between h-screen"
          >
            <Navbar />

            <main className="container mx-auto px-3">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<UserDetail />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
