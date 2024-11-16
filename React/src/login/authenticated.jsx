import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });
  }

  return (
    <div className="authenticated-container">
      <div className="playerName">{props.userName}</div>
        <Button
          variant="primary"
          className="primary-btn"
          onClick={() => navigate('/goals')}
        >
          Open MyGoals
        </Button>
        <Button
          variant="secondary"
          className="secondary-btn"
          onClick={logout}
        >
          Logout
        </Button>
    </div>
  );
}
