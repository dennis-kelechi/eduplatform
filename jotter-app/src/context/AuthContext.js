// src/context/AuthContext.js
import React from 'react';
import { validateCredentials } from '../utils/userStorage';

const AuthContext = React.createContext();

export class AuthProvider extends React.Component {
  state = {
    user: null,
    loading: true,
    error: null,
  };

  componentDidMount() {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.setState({ user: JSON.parse(storedUser), loading: false });
    } else {
      this.setState({ loading: false });
    }
  }

  login = async (email, password) => {
    this.setState({ loading: true, error: null });
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const foundUser = validateCredentials(email, password);
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
      this.setState({ user: userWithoutPassword, loading: false });
      return { success: true, role: foundUser.role };
    } else {
      this.setState({ error: 'Invalid email or password', loading: false });
      return { success: false, error: 'Invalid email or password' };
    }
  };

  logout = () => {
    localStorage.removeItem('currentUser');
    this.setState({ user: null, error: null });
  };

  render() {
    const { user, loading, error } = this.state;
    const value = {
      user,
      loading,
      error,
      isAuthenticated: !!user,
      role: user?.role,
      login: this.login,
      logout: this.logout,
    };
    return (
      <AuthContext.Provider value={value}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export const AuthConsumer = AuthContext.Consumer;