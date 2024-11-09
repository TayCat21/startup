import React, { useEffect, useState } from 'react';
import { AuthState } from './authState';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';

export function Login({ onAuthChange }) {
  const [authState, setAuthState] = useState(AuthState.Unknown);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Check if there's a saved user in localStorage
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      // If we find a username in localStorage, set AuthState to Authenticated
      setUserName(storedUserName);
      setAuthState(AuthState.Authenticated);
    } else {
      setAuthState(AuthState.Unauthenticated);
    }
  }, []);

  const handleLogin = (userName) => {
    setUserName(userName);
    localStorage.setItem('userName', userName);
    setAuthState(AuthState.Authenticated);
    onAuthChange(userName, AuthState.Authenticated);  // Update the parent component's auth state
  };

  const handleLogout = () => {
    localStorage.removeItem('userName');
    setAuthState(AuthState.Unauthenticated);
    onAuthChange(null, AuthState.Unauthenticated);  // Update the parent component's auth state
  };

  return (
    <main className="container-fluid text-center">
      <div id="myDiv">
        {/* Display the main title only if auth state is not Unknown */}
        {authState !== AuthState.Unknown && <h1 id="myTitle">Welcome to MyGoalSetter</h1>}
        
        {/* Render Authenticated state */}
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={handleLogout} />
        )}

        {/* Render Unauthenticated state */}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated userName={userName} onLogin={handleLogin} />
        )}
      </div>
    </main>
  );
}
