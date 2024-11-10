import React, { useState, useEffect } from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './goals.css'; // Your custom CSS
import './players.css';
import { Event, notifier } from './notifier'; // Assuming these are implemented correctly

export function Goals(props) {
  const userName = props.userName;

  const [notifications, setNotifications] = useState([]);
  const [storedGoals, setStoredGoals] = useState([]); // Holds the goals to display

  // Fetch goals from localStorage when the component mounts
  useEffect(() => {
    const goalsFromLocalStorage = JSON.parse(localStorage.getItem('goals')) || [];
    setStoredGoals(goalsFromLocalStorage);

    // Add handler to listen for GameEvent broadcasts
    const eventHandler = (event) => {
      console.log('Received event in Goals:', event);
      let newNotifications = [event, ...notifications];
      if (newNotifications.length > 10) {
        newNotifications = newNotifications.slice(0, 10);
      }
      setNotifications(newNotifications); // Update state with the new notifications list
    };

    // Register event handler
    notifier.addHandler(eventHandler);

    // Cleanup: Remove handler when the component unmounts
    return () => {
      notifier.removeHandler(eventHandler);
    };
  }, [notifications]); // This will trigger when notifications change

  // Add goal to localStorage and update the state
  const addGoal = (newGoal) => {
    const updatedGoals = [...storedGoals, newGoal];
    setStoredGoals(updatedGoals);
    localStorage.setItem('goals', JSON.stringify(updatedGoals));
  };

  function handleGoalCompletion(goal) {
    console.log("Completing Goal:", goal);
    notifier.broadcastEvent(userName, Event.GoalCompleted, { goal });
  }

  function createNotificationMessages() {
    return notifications.map((event, index) => {
      let message = 'unknown';
      if (event.type === Event.End) {
        message = `${event.from} finished a Brainstorm`;
      } else if (event.type === Event.Start) {
        message = `${event.from} made a new goal`;
      } else if (event.type === Event.System) {
        message = event.value.msg;
      } else if (event.type === Event.GoalCompleted) {
        message = `${event.from} achieved their goal!`;
      }

      return (
        <div key={index} className={`event ${event.type}`}>
          <span className="system-event">{event.from.split('@')[0]}</span> {message}
        </div>
      );
    });
  }

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

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Example Goal</Accordion.Header>
              <Accordion.Body>
                <p className="goalDesc">goal description...</p>
                <p className="goalDate">mm/dd/yyyy</p>
                <p className="reviewDate">Review set for: mm/dd/yyyy</p>
                <button onClick={() => handleGoalCompletion('Goal 1')} className="myButton">
                    Complete Goal
                  </button>
                  <button className="myButton"><a href="/plan">Edit Goal</a></button>
                  <button className="myButton"><a href="/review">Review Goal</a></button>
                </Accordion.Body>
            </Accordion.Item>
          </Accordion>
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
      </div>

      {/* Aside for achievements/logs */}
      <aside>
        <div className="container-fluid text-center shoutouts">
          <h1>Achievements Log</h1>
        </div>
        <div className="container-fluid text-center" id="notifications">
          {createNotificationMessages()} {/* Render the dynamic event messages */}
        </div>
      </aside>
    </main>
  );
}
