import React from 'react';
import { Link } from 'react-router-dom';
import { AuthConsumer } from '../context/AuthContext';
import '../styles/home.css';

class Home extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {({ isAuthenticated, role }) => (
          <div className="homepage">
            {/* Hero Section */}
            <section className="hero">
              <div className="hero-overlay"></div>
              <div className="hero-content">
                <h1 className="hero-title">
                  <span className="text-gradient">EduPlatform</span>
                  <br />
                  <span className="hero-highlight">Scholarship for Schools</span>
                </h1>
                <p className="hero-description">
                  Always helping schools thrive.<br />
                  Always ensuring a secure and engaging learning experience.
                </p>
                <div className="hero-buttons">
                  {!isAuthenticated ? (
                    <>
                      <Link to="/signup" className="btn btn-primary btn-glow">
                        Get Started
                      </Link>
                      <Link to="/login" className="btn btn-outline-light">
                        Login
                      </Link>
                    </>
                  ) : (
                    <Link to={`/${role}/dashboard`} className="btn btn-primary btn-glow">
                      Dashboard
                    </Link>
                  )}
                </div>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">10k+</span>
                  <span>Active Users</span>
                </div>
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span>Schools</span>
                </div>
                <div className="stat">
                  <span className="stat-number">300+</span>
                  <span>students</span>
                </div>
              </div>
            </section>

            {/* Role Cards with Font Awesome icons */}
            <section className="roles">
              <h2 className="section-title">Tailored for every role</h2>
              <div className="roles-container">
                <div className="role-card admin">
                  <div className="card-inner">
                    <div className="card-front">
                      <div className="role-icon"><i className="fas fa-crown"></i></div>
                      <h3>Admin</h3>
                      <p>Full control, analytics, user management</p>
                    </div>
                  </div>
                </div>
                <div className="role-card teacher">
                  <div className="card-inner">
                    <div className="card-front">
                      <div className="role-icon"><i className="fas fa-chalkboard-user"></i></div>
                      <h3>Teacher</h3>
                      <p>Courses, grading, student progress</p>
                    </div>
                  </div>
                </div>
                <div className="role-card student">
                  <div className="card-inner">
                    <div className="card-front">
                      <div className="role-icon"><i className="fas fa-graduation-cap"></i></div>
                      <h3>Student</h3>
                      <p>Learn, track achievements, earn certificates</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Feature Grid with icons */}
            <section className="features">
              <h2 className="section-title">Powerful features</h2>
              <div className="features-grid">
                <div className="feature">
                  <div className="feature-icon"><i className="fas fa-lock"></i></div>
                  <h3>IAM Security</h3>
                  <p>Role‑based access, secure authentication, fine‑grained permissions</p>
                </div>
                <div className="feature">
                  <div className="feature-icon"><i className="fas fa-chart-line"></i></div>
                  <h3>Real‑time Analytics</h3>
                  <p>Track engagement, progress, and performance</p>
                </div>
                <div className="feature">
                  <div className="feature-icon"><i className="fas fa-bolt"></i></div>
                  <h3>Lightning Fast</h3>
                  <p>Optimized for speed and responsive design</p>
                </div>
                <div className="feature">
                  <div className="feature-icon"><i className="fas fa-palette"></i></div>
                  <h3>Modern UI</h3>
                  <p>Glassmorphism, animations, and intuitive navigation</p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
              <div className="cta-content">
                <h2>Ready to transform learning?</h2>
                <p>Join thousands of educators and students today.</p>
                {!isAuthenticated ? (
                  <Link to="/signup" className="btn btn-large btn-glow">
                    Create Free Account
                  </Link>
                ) : (
                  <Link to={`/${role}/dashboard`} className="btn btn-large btn-glow">
                    Go to Dashboard
                  </Link>
                )}
              </div>
            </section>

            <footer className="footer">
              <p>© 2025 EduPlatform – Empowering education with IAM</p>
            </footer>
          </div>
        )}
      </AuthConsumer>
    );
  }
}

export default Home;