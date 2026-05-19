import React from 'react';
import { Link } from 'react-router-dom';

class UnauthorizedPage extends React.Component {
  render() {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Access Denied</h1>
        <p>You don't have permission to view this page.</p>
        <Link to="/login">Go to Login</Link>
      </div>
    );
  }
}

export default UnauthorizedPage;