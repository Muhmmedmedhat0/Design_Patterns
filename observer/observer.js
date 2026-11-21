const observers = [];

/**
 * Shared Observer subject.
 *
 * Subscribers receive the same notification data whenever `notify` is called.
 * The exported object is frozen so its public API cannot be replaced or extended.
 */
export default Object.freeze({
  /**
   * Sends data to every subscribed callback.
   * @param {*} data - Value or object to distribute to subscribers.
   * @returns {void}
   */
  notify: (data) => observers.forEach((observer) => observer(data)),

  /**
   * Registers a callback that will run for future notifications.
   * @param {(data: *) => void} func - Callback invoked by `notify`.
   * @returns {number} The new subscriber count.
   */
  subscribe: (func) => observers.push(func),

  /**
   * Removes all registrations of a callback.
   * @param {(data: *) => void} func - Callback to unregister.
   * @returns {void}
   */
  unsubscribe: (func) => {
    [...observers].forEach((observer, index) => {
      if (observer === func) {
        observers.splice(index, 1);
      }
    });
  },
});
