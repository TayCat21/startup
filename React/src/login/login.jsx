import React from 'react';

export function Login() {
  return (
    <main className="login-container">

      <div id="myTitle" className="circle">
        <h2>Welcome to</h2>
        <h1>MyGoalSetter</h1>
      </div>

      <div className="container-fluid text-center" id="myDiv">
        <h2>Login</h2>
        <form id="myForm" method="get" action="goals">
          <div className="input-group mb-3">
            <span className="input-group-text">👤</span>
            <input className="form-control" type="text" placeholder="username" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <input className="form-control" type="email" placeholder="your@email.com" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">🔒</span>
            <input className="form-control" type="password" placeholder="password" />
          </div>
          <button className="btn btn-primary" type="submit">Login</button>
          <button className="btn btn-secondary" type="submit">Sign Up</button>
        </form>
      </div>
    </main>
  );
}
