const Event = {
    System: 'system',
    End: 'End', //brainstorm end
    Start: 'Start', //made new goal
    GoalCompleted: 'GoalCompleted',
  };
  
  class EventMessage {
    constructor(from, type) {
      this.from = from; // The player name
      this.type = type; // The type of event (Start, goalCompleted, etc.)
    }
  }
  
  class EventNotifier {
    events = [];
    handlers = [];
  
    constructor() {
      // Simulate events periodically (until I get Websockets)
      setInterval(() => {
        const userName = 'Laura';  // Simulate a user triggering the event
        this.broadcastEvent(userName, Event.Start);
      }, 10000);  // Simulate every 10 seconds
    }
  
    broadcastEvent(from, type) {
      const event = new EventMessage(from, type);
      this.receiveEvent(event);
    }
  
    addHandler(handler) {
      this.handlers.push(handler);
    }
  
    removeHandler(handler) {
      this.handlers = this.handlers.filter((h) => h !== handler);
    }
  
    receiveEvent(event) {
        this.events.push(event);
    
        this.events.forEach((e) => {
          this.handlers.forEach((handler) => {
            handler(e);
          });
        });
      }
    }
  
  const notifier = new EventNotifier();
  export { Event, notifier };
  