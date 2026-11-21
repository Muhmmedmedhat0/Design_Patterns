import "./analytics.js";
import Observer from "./observer.js";

// Publishing immediately notifies every analytics subscriber.
Observer.notify("✨ New data ✨");

// Publishing again demonstrates that subscriptions remain active over time.
setTimeout(() => {
  Observer.notify("✨ New data after timeout ✨");
}, 1000);
