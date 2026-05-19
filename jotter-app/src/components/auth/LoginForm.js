import React from 'react';

class LoginForm extends React.Component {
  state = { email: '', password: '', error: '', loading: false };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, error: '' });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { onLogin } = this.props;
    this.setState({ loading: true, error: '' });
    const result = await onLogin(email, password);
    if (!result.success) {
      this.setState({ error: result.error, loading: false });
    }
  };

  render() {
    const { email, password, error, loading } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={email} onChange={this.handleChange} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} required />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
      </form>
    );
  }
}

export default LoginForm;