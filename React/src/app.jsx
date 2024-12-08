import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Goals } from './goals/goals';
import { Ideas } from './ideas/ideas';
import { Plan } from './plan/plan';
import { Review } from './review/review';
import { AuthState } from './login/authState';

function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const [authState, setAuthState] = React.useState(userName ? AuthState.Authenticated : AuthState.Unauthenticated);
    const [goals, setGoals] = React.useState([]);
   
    const addGoal = (newGoal) => {
        setGoals((prevGoals) => [...prevGoals, newGoal]);
    };

    return (
        <BrowserRouter>
            <div>
                <header className="container-fluid myEdit">
                    <nav className="navbar fixed-top navbar-dark">
                        <img src="/favicon.ico" alt="logo" />
                        <div className="navbar-brand">MyGoalSetter</div>
                        <menu className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="">Login</NavLink>
                            </li>
                            {authState === AuthState.Authenticated && (
                                <>
                                    <li className='nav-item'>
                                        <NavLink className='nav-link' to='goals'>MyGoals</NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink className='nav-link' to='ideas'>Brainstorm</NavLink>
                                    </li>
                                </>
                            )}
                        </menu>
                    </nav>
                </header>

                <Routes>
                    <Route
                        path='/'
                        element={
                            <Login
                                userName={userName}
                                authState={authState}
                                onAuthChange={(userName, authState) => {
                                    setAuthState(authState);
                                    setUserName(userName);
                                }}
                            />
                        }
                        exact
                    />
                    <Route
                        path='/goals'
                        element={<Goals userName={userName} goals={goals} />}
                    />
                    <Route
                        path='/ideas'
                        element={<Ideas userName={userName} />}
                    />
                    <Route
                        path='/plan'
                        element={<Plan userName={userName} addGoal={addGoal} />}
                    />
                    <Route 
                        path="/review/:goalId" 
                        element={<Review userName={userName} />} 
                    />
                    <Route
                        path='*'
                        element={<NotFound />}
                    />
                </Routes>

                <footer className="bg-dark text-white-50">
                    <div className="container-fluid myEdit">
                        <span className="text-reset">Tayzia Slade</span>
                        <a className="text-reset" href="https://github.com/TayCat21/startup/tree/main">MyGitHub</a>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;
