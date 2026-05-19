import React from 'react';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import AdminDashboard from '../components/dashboard/AdminDashboard';

class AdminPage extends React.Component {
  render() {
    return (
      <ProtectedRoute allowedRoles={['admin']}>
        <AdminDashboard />
      </ProtectedRoute>
    );
  }
}

export default AdminPage;