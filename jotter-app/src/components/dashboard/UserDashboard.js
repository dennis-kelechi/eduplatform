// src/components/dashboard/UserDashboard.js
import React from 'react';
import DashboardLayout from '../layout/DashboardLayout';
import { AuthConsumer } from '../../context/AuthContext';

class UserDashboard extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {({ user }) => (
          <DashboardLayout title="User Dashboard">
            <div className="welcome-card">
              <div className="welcome-text">
                <h2>Hello, {user.name}</h2>
                <p>Your learning journey and account overview.</p>
              </div>
              <span className="badge user-badge">Regular User</span>
            </div>

            <div className="stats-grid">
              <div className="stat-card"><div className="stat-title">Courses Enrolled</div><div className="stat-value">3</div></div>
              <div className="stat-card"><div className="stat-title">Completed Lessons</div><div className="stat-value">24</div></div>
              <div className="stat-card"><div className="stat-title">Certificates</div><div className="stat-value">1</div></div>
              <div className="stat-card"><div className="stat-title">Study Streak</div><div className="stat-value">5 days</div></div>
            </div>

            {/* Current Courses */}
            <div className="card full-width" style={{ marginBottom: '1.5rem' }}>
              <h3>My Courses</h3>
              <div className="course-progress-list">
                <div className="course-item">
                  <span>Web Development Bootcamp</span>
                  <div className="progress-bar"><div style={{width:'65%'}}></div></div>
                  <span>65%</span>
                </div>
                <div className="course-item">
                  <span>React Masterclass</span>
                  <div className="progress-bar"><div style={{width:'40%'}}></div></div>
                  <span>40%</span>
                </div>
                <div className="course-item">
                  <span>UI/UX Fundamentals</span>
                  <div className="progress-bar"><div style={{width:'80%'}}></div></div>
                  <span>80%</span>
                </div>
              </div>
              <button className="card-btn">Continue Learning</button>
            </div>

            {/* Two-column: Upcoming Tasks + Recent Activity */}
            <div className="two-col-grid">
              <div className="card">
                <h3>Upcoming Deadlines</h3>
                <div className="task-list">
                  <div>📅 Quiz: JavaScript Basics - Tomorrow</div>
                  <div>📅 Project Milestone 2 - Friday</div>
                  <div>📅 Peer Review - Next week</div>
                </div>
              </div>
              <div className="card">
                <h3>Recent Achievements</h3>
                <div className="achievement-list">
                  <div>🏆 Completed "Intro to HTML"</div>
                  <div>⭐ First assignment submitted</div>
                  <div>📚 Read 5 articles</div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="dashboard-grid">
              <div className="card"><h3>My Profile</h3><p>Update your personal info.</p><button className="card-btn">Edit Profile</button></div>
              <div className="card"><h3>Browse Courses</h3><p>Explore new subjects.</p><button className="card-btn">Find Courses</button></div>
              <div className="card"><h3>Support</h3><p>Get help or contact support.</p><button className="card-btn">Help Center</button></div>
            </div>
          </DashboardLayout>
        )}
      </AuthConsumer>
    );
  }
}

export default UserDashboard;