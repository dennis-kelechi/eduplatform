// src/components/dashboard/AdminDashboard.js
import React from 'react';
import DashboardLayout from '../layout/DashboardLayout';
import { AuthConsumer } from '../../context/AuthContext';

class AdminDashboard extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {({ user }) => (
          <DashboardLayout title="Admin Dashboard">
            {/* Welcome Section */}
            <div className="welcome-card">
              <div className="welcome-text">
                <h2>Welcome back, {user.name}</h2>
                <p>Here's what's happening with your platform today.</p>
              </div>
              <span className="badge admin-badge">Administrator</span>
            </div>

            {/* Stats Row */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-title">Total Users</div>
                <div className="stat-value">1,284</div>
                <div className="stat-trend up">+12% this week</div>
              </div>
              <div className="stat-card">
                <div className="stat-title">Active Sessions</div>
                <div className="stat-value">342</div>
                <div className="stat-trend up">+8%</div>
              </div>
              <div className="stat-card">
                <div className="stat-title">New Signups (30d)</div>
                <div className="stat-value">156</div>
                <div className="stat-trend up">+23%</div>
              </div>
              <div className="stat-card">
                <div className="stat-title">System Uptime</div>
                <div className="stat-value">99.97%</div>
                <div className="stat-trend neutral">Last 30 days</div>
              </div>
            </div>

            {/* Charts Section - Placeholder with CSS graph */}
            <div className="chart-container">
              <h3>User Growth (Last 6 months)</h3>
              <div className="bar-chart">
                <div className="bar" style={{ height: '60px' }}><span>Jan</span></div>
                <div className="bar" style={{ height: '72px' }}><span>Feb</span></div>
                <div className="bar" style={{ height: '85px' }}><span>Mar</span></div>
                <div className="bar" style={{ height: '94px' }}><span>Apr</span></div>
                <div className="bar" style={{ height: '110px' }}><span>May</span></div>
                <div className="bar" style={{ height: '128px' }}><span>Jun</span></div>
              </div>
            </div>

            {/* Two-column layout: Recent Users + Activity Log */}
            <div className="two-col-grid">
              <div className="card full-width">
                <h3>Recent Users</h3>
                <table className="recent-table">
                  <thead>
                    <tr><th>Name</th><th>Email</th><th>Role</th><th>Joined</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Emily Chen</td><td>emily@example.com</td><td>Teacher</td><td>2 days ago</td></tr>
                    <tr><td>Marcus Lee</td><td>marcus@example.com</td><td>User</td><td>5 days ago</td></tr>
                    <tr><td>Sarah Johnson</td><td>sarah@example.com</td><td>Admin</td><td>1 week ago</td></tr>
                  </tbody>
                </table>
                <button className="card-btn">View All Users</button>
              </div>

              <div className="card full-width">
                <h3>Recent Activity</h3>
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-icon">👤</div>
                    <div><strong>New user registered</strong><br/><small>john_doe@example.com</small></div>
                    <div className="activity-time">5 min ago</div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">⚙️</div>
                    <div><strong>System settings updated</strong><br/><small>by Admin</small></div>
                    <div className="activity-time">1 hour ago</div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">📚</div>
                    <div><strong>New course added</strong><br/><small>"Advanced React"</small></div>
                    <div className="activity-time">3 hours ago</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Cards */}
            <div className="dashboard-grid">
              <div className="card">
                <h3>User Management</h3>
                <p>Add, edit, suspend users. Assign roles.</p>
                <button className="card-btn">Manage Users</button>
              </div>
              <div className="card">
                <h3>Role Management (IAM)</h3>
                <p>Define permissions for each role.</p>
                <button className="card-btn">Edit Roles</button>
              </div>
              <div className="card">
                <h3>System Logs</h3>
                <p>View server and audit logs.</p>
                <button className="card-btn">View Logs</button>
              </div>
            </div>
          </DashboardLayout>
        )}
      </AuthConsumer>
    );
  }
}

export default AdminDashboard;