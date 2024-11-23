import React, { useState, useEffect } from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './goals.css';
import { Players } from './Players';
import { Event, notifier } from './notifier';
import { Plan } from '../plan/plan';

export function Goals({ userName, goals }) {
  const [storedGoals, setStoredGoals] = useState([
    { 
      name: 'Example Goal 1', 
      description: 'Description of goal 1', 
      startDate: '01/01/2024', 
      endDate: '01/10/2024', 
      reviewDate: '01/05/2024', 
      completed: false 
    },
    { 
      name: 'Example Goal 2', 
      description: 'Description of goal 2', 
      startDate: '02/01/2024', 
      endDate: '02/10/2024', 
      reviewDate: '02/05/2024', 
      completed: true 
    }
  ]);

  const [messages, setMessages] = useState([]);

  React.useEffect(() => {
    // Handler to listen for events and update messages
    const handleEvent = (event) => {
      let newMessages = notifier.getMessages();
      if (newMessages.length > 10) {
        newMessages = newMessages.slice(1, 10);
      }
      setMessages(newMessages);
    };

    notifier.addHandler(handleEvent);

    return () => {
      notifier.removeHandler(handleEvent);
    };
  }, []);

  // Handle Goal Completion
  const handleGoalCompletion = (goal) => {
    const updatedGoals = storedGoals.map((g) => 
      g.name === goal.name ? { ...g, completed: true } : g
    );
    
    setStoredGoals(updatedGoals);

    // Send GoalCompleted event
    notifier.broadcastEvent(userName, Event.GoalCompleted);
  };

  // Function to add a new goal
  const addGoal = (newGoal) => {
    setStoredGoals(prevGoals => [...prevGoals, newGoal]);
  };

  return (
    <main>
      <div className="container" id="goalBlock">
        {/* Dropdown for creating a new goal */}
        <div className="container" id="goalButton">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>New Goal</Accordion.Header>
              <Accordion.Body>
                <a className="dropdown-item" href="plan">Make New</a>
                <a className="dropdown-item" href="ideas">Brainstorm Idea</a>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        {/* Active Goals Section */}
        <div className="container" id="active">
          <h2>Active Goals</h2>
          {storedGoals.filter(goal => !goal.completed).map((goal, index) => (
            <Accordion key={index}>
              <Accordion.Item eventKey={index.toString()}>
                <Accordion.Header>{goal.name}</Accordion.Header>
                <Accordion.Body>
                  <p className="goalDesc">{goal.description}</p>
                  <p className="goalDate">Start Date: {goal.startDate} - End Date: {goal.endDate}</p>
                  <p className="reviewDate">Review set for: {goal.reviewDate}</p>
                  <button onClick={() => handleGoalCompletion(goal)} className="myButton">
                    Complete Goal
                  </button>
                  <button className="myButton"><a href="/plan">Edit Goal</a></button>
                  <button className="myButton"><a href="/review">Review Goal</a></button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            
          ))}
          </div>

        {/* Past Goals Section */}
        <div className="container" id="past">
          <h2>Past Goals</h2>
          {storedGoals.filter(goal => goal.completed).map((goal, index) => (
            <Accordion key={index}>
              <Accordion.Item eventKey={index.toString()}>
                <Accordion.Header>{goal.name}</Accordion.Header>
                <Accordion.Body>
                  <p className="goalDesc">{goal.description}</p>
                  <p className="goalDate">Start Date: {goal.startDate} - End Date: {goal.endDate}</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
        </div>

        <Players userName={userName} storedGoals={storedGoals} messages={messages} />
      </div>
    </main>
  );
}
