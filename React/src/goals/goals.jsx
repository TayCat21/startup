import React, { useState, useEffect } from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './goals.css';
import { Players } from './Players';
import { Event, notifier } from './notifier';

export function Goals({ userName, goals }) {
  const [storedGoals, setStoredGoals] = useState([]);  // Initially empty array for goals
  const [messages, setMessages] = useState([]);

  // Fetch goals from the backend when component mounts
  React.useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await fetch(`/api/goals?userName=${userName}`);
        if (response.ok) {
          const fetchedGoals = await response.json();
          setStoredGoals(fetchedGoals);  // Set the fetched goals into state
        } else {
          console.error('Failed to fetch goals');
        }
      } catch (error) {
        console.error('Error fetching goals:', error);
      }
    };
  
    if (userName) {
      fetchGoals();  // Fetch goals for the logged-in user
    }
  }, [userName]);  // Dependency array ensures this runs when `userName` changes

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
