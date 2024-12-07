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
    let port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
    this.socket.onmessage = async (msg) => {
      try {
        const event = JSON.parse(await msg.data.text());
        this.receiveEvent(event);
      } catch {}
    };
  }

  broadcastEvent(from, type) {
    const event = new EventMessage(from, type);
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(event));  
    } else {
      console.warn("WebSocket not open, event will not be broadcast");
    }
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

  getMessages() {
    return this.events.map((event) => {
      switch (event.type) {
        case Event.Start:
          return `${event.from} started a new goal`;
        case Event.GoalCompleted:
          return `${event.from} completed their goal!`;
        case Event.End:
          return `${event.from} finished a Brainstorm`;
        default:
          return `${event.from} triggered an unknown event.`;
      }
    });
  }
}

const notifier = new EventNotifier();
export { Event, notifier };
