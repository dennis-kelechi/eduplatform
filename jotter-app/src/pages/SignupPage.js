// src/pages/SignupPage.js
import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import { AuthConsumer } from '../context/AuthContext';
import { saveUser, findUserByEmail } from '../utils/userStorage';
import '../styles/login.css'; // reuse login styles

class SignupPage extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
    error: '',
    loading: false,
    success: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, error: '' });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, role } = this.state;

    if (!name || !email || !password) {
      this.setState({ error: 'All fields are required' });
      return;
    }
    if (password !== confirmPassword) {
      this.setState({ error: 'Passwords do not match' });
      return;
    }
    if (findUserByEmail(email)) {
      this.setState({ error: 'Email already registered' });
      return;
    }

    this.setState({ loading: true, error: '' });
    await new Promise(resolve => setTimeout(resolve, 500)); // simulate API

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      role,
    };
    saveUser(newUser);
    this.setState({ loading: false, success: true });
  };

  render() {
    const { name, email, password, confirmPassword, role, error, loading, success } = this.state;

    if (success) {
      return (
        <div className="login-container">
          <div className="login-card" style={{ textAlign: 'center' }}>
            <h2>Account Created!</h2>
            <p>You can now log in with your credentials.</p>
            <Link to="/login">
              <button style={{ marginTop: '1rem' }}>Go to Login</button>
            </Link>
          </div>
        </div>
      );
    }

    return (
      <AuthConsumer>
        {({ isAuthenticated }) => {
          if (isAuthenticated) return <Navigate to="/" replace />;
          return (
            <div className="login-container">
              <div className="login-card">
                <h2>Create Account</h2>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="name" value={name} onChange={this.handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={this.handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={this.handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Role</label>
                    <select name="role" value={role} onChange={this.handleChange} style={{ width: '100%', padding: '0.7rem', borderRadius: '0.75rem', border: '1px solid #cbd5e1' }}>
                      <option value="user">User</option>
                      <option value="teacher">Teacher</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                  {error && <div className="error-message">{error}</div>}
                  <button type="submit" disabled={loading}>{loading ? 'Creating...' : 'Sign Up'}</button>
                </form>
                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                  Already have an account? <Link to="/login">Login</Link>
                </div>
              </div>
            </div>
          );
        }}
      </AuthConsumer>
    );
  }
}

export default SignupPage;