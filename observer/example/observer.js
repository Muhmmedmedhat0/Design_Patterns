const observers = new Set();

export default Object.freeze({
  notify: (data) => {
    [...observers].forEach((observer) => observer(data));
  },
  subscribe: (func) => {
    if (typeof func !== "function") {
      throw new TypeError("Observer subscriber must be a function");
    }

    observers.add(func);
    return observers.size;
  },
  unsubscribe: (func) => observers.delete(func),
});
