import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
      <div>
        <header class="container-fluid">
            <nav class="navbar fixed-top navbar-dark">
                <img src="favicon.ico"/>
                <a class="navbar-brand" href="#">MyGoalSetter</a>
                <menu class="navbar-nav">
                    <li class="nav-item"><a class="nav-link active" href="index.html">Login</a></li>
                    <li class="nav-item"><a class="nav-link" href="goals.html">MyGoals</a></li>
                </menu>
            </nav>
        </header>
  
        <main>App components go here</main>
  
        <footer class="bg-dark text-white-50">
            <div class="container-fluid">
                <span class="text-reset">Tayzia Slade</span>
                <a class= "text-reset" href="https://github.com/TayCat21/startup/tree/main">MyGitHub</a>
            </div>
        </footer>
      </div>
    );
  }