import React from 'react';
import '../styles/about.css';

class About extends React.Component {
  render() {
    return (
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <h1 className="about-title">
              <span className="text-gradient">About EduPlatform</span> 
            </h1>
            <p className="about-subtitle">
              We’re on a mission to empower schools with secure, role‑based learning platforms.
            </p>
          </div>
        </section>

        {/* Mission & Vision Cards */}
        <section className="mission-section">
          <div className="mission-card">
            <div className="mission-icon"><i className="fas fa-bullseye"></i></div>
            <h3>Our Mission</h3>
            <p>To provide a seamless, IAM‑powered education platform that adapts to every user’s role – admin, teacher, or student.</p>
          </div>
          <div className="mission-card">
            <div className="mission-icon"><i className="fas fa-eye"></i></div>
            <h3>Our Vision</h3>
            <p>A world where every school has access to modern, secure, and intuitive digital learning tools.</p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="team-section">
          <h2 className="section-title">Meet the Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar"><i className="fas fa-code"></i></div>
              <h3>Alex Johnson</h3>
              <p>Lead Developer</p>
              <div className="team-social">
                <i className="fab fa-twitter"></i> <i className="fab fa-linkedin"></i> <i className="fas fa-envelope"></i>
              </div>
            </div>
            <div className="team-card">
              <div className="team-avatar"><i className="fas fa-chalkboard"></i></div>
              <h3>Dr. Maria Garcia</h3>
              <p>Education Director</p>
              <div className="team-social">
                <i className="fab fa-twitter"></i> <i className="fab fa-linkedin"></i> <i className="fas fa-envelope"></i>
              </div>
            </div>
            <div className="team-card">
              <div className="team-avatar"><i className="fas fa-paintbrush"></i></div>
              <h3>Sophia Chen</h3>
              <p>UX Designer</p>
              <div className="team-social">
                <i className="fab fa-twitter"></i> <i className="fab fa-linkedin"></i> <i className="fas fa-envelope"></i>
              </div>
            </div>
            <div className="team-card">
              <div className="team-avatar"><i className="fas fa-gear"></i></div>
              <h3>kelechi Dennis</h3>
              <p>Security Engineer</p>
              <div className="team-social">
                <i className="fab fa-twitter"></i> <i className="fab fa-linkedin"></i> <i className="fas fa-envelope"></i>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon"><i className="fas fa-shield-haltered"></i></div>
              <h4>Security First</h4>
              <p>IAM and data protection at every level.</p>
            </div>
            <div className="value-item">
              <div className="value-icon"><i className="fas fa-brain"></i></div>
              <h4>Innovation</h4>
              <p>Always adopting the best modern tools.</p>
            </div>
            <div className="value-item">
              <div className="value-icon"><i className="fas fa-handshake"></i></div>
              <h4>Inclusivity</h4>
              <p>Accessible for all roles and backgrounds.</p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>© 2025 EduPlatform – Empowering education with IAM</p>
        </footer>
      </div>
    );
  }
}

export default About;