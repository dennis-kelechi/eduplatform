// src/pages/LoginPage.js
import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import { AuthConsumer } from '../context/AuthContext';
import LoginForm from '../components/auth/LoginForm';
import '../styles/login.css';

class LoginPage extends React.Component {
  handleLogin = async (email, password, loginFn) => {
    const result = await loginFn(email, password);
    if (result.success) {
      const redirectMap = { admin: '/admin', teacher: '/teacher', user: '/user' };
      window.location.href = redirectMap[result.role];
    }
    return result;
  };

  render() {
    return (
      <AuthConsumer>
        {({ isAuthenticated, login, role }) => {
          if (isAuthenticated) {
            const redirectMap = { admin: '/admin', teacher: '/teacher', user: '/user' };
            return <Navigate to={redirectMap[role]} replace />;
          }
          return (
            <div className="login-container">
              <div className="login-card">
                <h2>Welcome Back</h2>
                <LoginForm onLogin={(e, p) => this.handleLogin(e, p, login)} />
                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                  Don't have an account? <Link to="/signup">Sign up</Link>
                </div>
              </div>
            </div>
          );
        }}
      </AuthConsumer>
    );
  }
}

export default LoginPage;