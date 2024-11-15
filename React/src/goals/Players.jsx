import React from 'react';
import './players.css';

export function Players({ userName, storedGoals, messages }) {

    return (
        <div className='players'>
          <h1>Welcome, {userName}!</h1>

          <div className="notifications">
            <h2>Achievements Log</h2>
            {messages.length > 0 ? (
              <ul>
                {messages.map((message, index) => (
                  <li key={index}>{message}</li>
                ))}
              </ul>
              ) : (
                <p>No notifications</p>
              )}
            </div>
          </div>
        );
      }