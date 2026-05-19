import React from 'react';
// eslint-disable-next-line no-unused-vars
import { AuthConsumer } from '../../context/AuthContext';

class DashboardLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="dashboard-container">
        <div className="dashboard-content">{children}</div>
      </div>
    );
  }
}

export default DashboardLayout;