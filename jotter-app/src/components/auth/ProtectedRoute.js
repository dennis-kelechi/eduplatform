import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthConsumer } from '../../context/AuthContext';

class ProtectedRoute extends React.Component {
  render() {
    const { allowedRoles, children } = this.props;
    return (
      <AuthConsumer>
        {({ isAuthenticated, role, loading }) => {
          if (loading) return <div className="loading">Loading...</div>;
          if (!isAuthenticated) return <Navigate to="/login" replace />;
          if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
            return <Navigate to="/unauthorized" replace />;
          }
          return children;
        }}
      </AuthConsumer>
    );
  }
}

export default ProtectedRoute;