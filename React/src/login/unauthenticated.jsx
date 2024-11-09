import React from 'react';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';
import './unauthenticated.css';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    if (userName && password) {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
    } else {
      setDisplayError('Please provide both username and password.');
    }
  }

  async function createUser() {
    if (userName && password) {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
    } else {
      setDisplayError('Please provide both username and password.');
    }
  }

  return (
    <div className="unauthenticated-container">
      <div className="input-group">
        <span className="input-group-text">👤</span>
        <input
          className="form-control"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="your@email.com"
        />
      </div>
      <div className="input-group">
        <span className="input-group-text">🔒</span>
        <input
          className="form-control"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
      </div>
      <div className="unauthenticated-buttons">
        <Button
          variant="primary"
          className="primary-btn"
          onClick={loginUser}
          disabled={!userName || !password}
        >
          Login
        </Button>
        <Button
          variant="secondary"
          className="secondary-btn"
          onClick={createUser}
          disabled={!userName || !password}
        >
          Create Account
        </Button>
      </div>

      {/* Error Message */}
      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </div>
  );
}
