import React from 'react';
import { Event, notifier } from './notifier'; // Importing events and notifier
import './players.css';  // Ensure CSS for your events

export function Players(props) {
  const userName = props.userName;
  const [events, setEvents] = useState([]);

  React.useEffect(() => {
        console.log('Received event:', event);
        notifier.addHandler(eventHandler);

        return () => {
          notifier.removeHandler(eventHandler);
        };
      });

      function eventHandler(event) {
        let newEvents = [event, ...events];
        if (newEvents.length > 10) {
            newEvents = newEvents.slice(1, 10);
        }
        setEvents(newEvents);
      }

    function createMessageArray() {
        const messageArray = [];
        for (const [i, event] of events.entries()) {
        let message = 'unknown';
        if (event.type === Event.End) {
            message = `finished a Brainstorm`;
        } else if (event.type === Event.Start) {
            message = `made a new goal`;
        } else if (event.type === Event.GoalCompleted) {
            message = `achieved their goal!`;
        } else if (event.type === Event.System) {
            message = event.value.msg; 
        }

        messageArray.push(
            <div key={i} className={`event`}>
                <span className={'player-event'}>{userName}</span>
                {message}
            </div>
        );
    }
  
      return messageArray;
    }

    return (
        <div className='players'>
          Player
          <span className='player-name'>{userName}</span>
          <div id='player-messages'>{createMessageArray()}</div>
        </div>
      );
    }