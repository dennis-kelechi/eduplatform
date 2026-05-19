import React from 'react';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import UserDashboard from '../components/dashboard/UserDashboard';

class UserPage extends React.Component {
  render() {
    return (
      <ProtectedRoute allowedRoles={['user']}>
        <UserDashboard />
      </ProtectedRoute>
    );
  }
}

export default UserPage;