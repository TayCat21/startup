import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './goals.css'; // Your custom CSS
import { Link } from 'react-router-dom';

export function Goals() {
    return (
    <main>
      <div className="container">
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
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Goal 1</Accordion.Header>
                    <Accordion.Body>
                    <p className="goalDesc">Lorem ipsum...</p>
                  <p className="goalDate">mm/dd/yyyy</p>
                  <p className="reviewDate">review set for: mm/dd/yyyy</p>
                  <button className='myButton'><a href="/plan">Edit Goal</a></button>
                  <button className='myButton'><a href="/review">Review Goal</a></button>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            {/* Repeat accordion items for additional goals */}
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
            {/* Repeat accordion items for additional goals */}
        </div>
      </div>

      {/* Aside for achievements/logs */}
      <aside>
            <div className="container-fluid text-center shoutouts">
                <h1>Achievements Log</h1> 
            </div>
            <div  className="container-fluid text-center" id="notifications">
                <div className="event"><span className="system-event">Sara</span> made a new goal</div>
                <div className="event"><span className="system-event">Josh</span> finished a Brainstorm</div>
                <div className="specialEvent"><span className="system-event">Jordan</span> achieved their goal!</div>
              </div>
        </aside>

    </main>
  );
}