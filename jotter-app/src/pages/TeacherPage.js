import React from 'react';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import TeacherDashboard from '../components/dashboard/TeacherDashboard';

class TeacherPage extends React.Component {
  render() {
    return (
      <ProtectedRoute allowedRoles={['teacher']}>
        <TeacherDashboard />
      </ProtectedRoute>
    );
  }
}

export default TeacherPage;