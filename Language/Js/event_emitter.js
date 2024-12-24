var EventEmitter = require("events");
const events = new EventEmitter();

// register an event
events.on("message", () => {
  console.log("Event is raised");
});

events.on("send", (msg) => {
  console.log(`The message is ${msg}`);
});

// Raise an event
// create a signal
events.emit("message");
events.emit("send", "Good Boy");
