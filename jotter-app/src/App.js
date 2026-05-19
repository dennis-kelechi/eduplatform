import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, AuthConsumer } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import UnauthorizedPage from './pages/UnauthorizedPage';
import AdminPage from './pages/AdminPage';
import TeacherPage from './pages/TeacherPage';
import UserPage from './pages/UserPage';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/navbar.css';   // import navbar CSS
import './styles/dashboard.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AuthProvider>
          <AuthConsumer>
            {({ isAuthenticated, role, logout }) => (
              <nav className="global-nav">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                {isAuthenticated ? (
                  <>
                    <Link to={`/${role}/dashboard`}>Dashboard</Link>
                    <button onClick={logout} className="nav-logout-btn">Logout</button>
                  </>
                ) : (
                  <>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                  </>
                )}
              </nav>
            )}
          </AuthConsumer>

          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
            <Route path="/admin/*" element={<AdminPage />} />
            <Route path="/teacher/*" element={<TeacherPage />} />
            <Route path="/user/*" element={<UserPage />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    );
  }
}

export default App;