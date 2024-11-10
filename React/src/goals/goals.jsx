import React, { useState, useEffect } from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './goals.css'; // Your custom CSS
import { Event, notifier } from './notifier';
import { Players } from './Players'; // Assuming this is the component where you want to show events

export function Goals(props) {
  const userName = props.userName;

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Add handler to listen for GameEvent broadcasts
    const eventHandler = (event) => {
      console.log('Received event in Goals:', event); // Log the event to see if it's working
      let newNotifications = [event, ...notifications];
      if (newNotifications.length > 10) {
        newNotifications = newNotifications.slice(0, 10); // Keep only the latest 10 events
      }
      setNotifications(newNotifications); // Update state with the new notifications list
    };

    // Register event handler
    notifier.addHandler(eventHandler);

    // Cleanup: Remove handler when the component unmounts
    return () => {
      notifier.removeHandler(eventHandler);
    };
  }, [notifications]); // Update when notifications state changes

  function handleGoalCompletion(goal) {
    console.log("Completing Goal:", goal);  // Add this for debugging
    notifier.broadcastEvent(userName, Event.GoalCompleted, { goal });
  }

  // Dynamically create event messages for notifications
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
          <button onClick={() => handleGoalCompletion('Goal 1')}>Complete Goal</button>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Goal 1</Accordion.Header>
              <Accordion.Body>
                <p className="goalDesc">Lorem ipsum...</p>
                <p className="goalDate">mm/dd/yyyy</p>
                <p className="reviewDate">review set for: mm/dd/yyyy</p>
                <button className="myButton"><a href="/plan">Edit Goal</a></button>
                <button className="myButton"><a href="/review">Review Goal</a></button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        {/* Past Goals Section */}
        <div className="container" id="past">
          <h2>Past Goals</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Goal a</Accordion.Header>
              <Accordion.Body>
                <p className="goalDesc">Lorem ipsum...</p>
                <p className="goalDate">mm/dd/yyyy</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
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
