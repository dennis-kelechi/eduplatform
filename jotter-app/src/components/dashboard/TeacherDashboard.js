// src/components/dashboard/TeacherDashboard.js
import React from 'react';
import DashboardLayout from '../layout/DashboardLayout';
import { AuthConsumer } from '../../context/AuthContext';

class TeacherDashboard extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {({ user }) => (
          <DashboardLayout title="Teacher Dashboard">
            <div className="welcome-card">
              <div className="welcome-text">
                <h2>Welcome, {user.name}</h2>
                <p>Your classes and student progress.</p>
              </div>
              <span className="badge teacher-badge">Teacher</span>
            </div>

            {/* Stats */}
            <div className="stats-grid">
              <div className="stat-card"><div className="stat-title">Active Courses</div><div className="stat-value">4</div></div>
              <div className="stat-card"><div className="stat-title">Total Students</div><div className="stat-value">87</div></div>
              <div className="stat-card"><div className="stat-title">Assignments to Grade</div><div className="stat-value">23</div></div>
              <div className="stat-card"><div className="stat-title">Avg. Class Score</div><div className="stat-value">84%</div></div>
            </div>

            {/* Courses Table */}
            <div className="card full-width" style={{ marginBottom: '1.5rem' }}>
              <h3>Your Courses</h3>
              <table className="recent-table">
                <thead><tr><th>Course</th><th>Students</th><th>Progress</th><th>Actions</th></tr></thead>
                <tbody>
                  <tr><td>Mathematics 101</td><td>32</td><td><div className="progress-bar"><div style={{width:'70%'}}></div></div></td><td><button className="small-btn">View</button></td></tr>
                  <tr><td>Physics - Mechanics</td><td>28</td><td><div className="progress-bar"><div style={{width:'55%'}}></div></div></td><td><button className="small-btn">View</button></td></tr>
                  <tr><td>Computer Science 201</td><td>27</td><td><div className="progress-bar"><div style={{width:'82%'}}></div></div></td><td><button className="small-btn">View</button></td></tr>
                </tbody>
              </table>
            </div>

            {/* Two columns: Pending Assignments + Recent Submissions */}
            <div className="two-col-grid">
              <div className="card">
                <h3>Pending Assignments</h3>
                <div className="assignment-list">
                  <div>📝 Week 4 Quiz - 12 submissions</div>
                  <div>📝 Lab Report #3 - 8 submissions</div>
                  <div>📝 Final Project Draft - 3 submissions</div>
                </div>
                <button className="card-btn">Grade Now</button>
              </div>
              <div className="card">
                <h3>Recent Submissions</h3>
                <div className="activity-list">
                  <div className="activity-item">Jane Smith submitted HW3</div>
                  <div className="activity-item">Mike Lee uploaded project</div>
                  <div className="activity-item">Anna Kim took quiz</div>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div className="dashboard-grid">
              <div className="card"><h3>Create Assignment</h3><p>Post new homework or quiz.</p><button className="card-btn">Create</button></div>
              <div className="card"><h3>View Roster</h3><p>See all enrolled students.</p><button className="card-btn">Roster</button></div>
              <div className="card"><h3>Analytics</h3><p>Student performance insights.</p><button className="card-btn">View Stats</button></div>
            </div>
          </DashboardLayout>
        )}
      </AuthConsumer>
    );
  }
}

export default TeacherDashboard;