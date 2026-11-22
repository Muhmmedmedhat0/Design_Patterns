# Design Patterns

This repository is a compact JavaScript patterns playground that demonstrates four important concepts in modern frontend and Node-style architecture:

- Module pattern
- Singleton pattern
- Proxy pattern
- Observer pattern

The examples are intentionally small, readable, and designed to teach the idea behind each pattern without adding framework or tooling overhead.

## Overview

The project is organized into separate folders, each representing a different pattern and its accompanying example code:

- `module/` — demonstrates ES modules and encapsulated utility functions
- `singleton/` — demonstrates a single shared instance pattern
- `proxy/` — demonstrates interception of property access and validation logic
- `observer/` — demonstrates publishing events to multiple subscribers

## Project structure

```text
Design_Patterns/
├── README.md
├── module/
│   ├── index.html
│   ├── package.json
│   ├── styles.css
│   └── js/
│       ├── index.js
│       └── math.js
├── proxy/
│   ├── index.js
│   └── example/
│       ├── index.js
│       ├── package.json
│       └── validator.js
├── singleton/
    ├── example.js
    └── index.js
└── observer/
    ├── analytics.js
    ├── index.js
    ├── observer.js
    ├── package.json
    └── example/
        ├── analytics.js
        ├── index.html
        ├── index.js
        ├── observer.js
        ├── package.json
        ├── style.css
        └── tsconfig.json
```

## 1) Module pattern

The `module/` directory is the clearest demonstration of the module pattern in JavaScript.

### What it does (module pattern)

- Encapsulates reusable logic in a dedicated file (`math.js`)
- Exports named functions for reuse
- Imports those functions in a separate entry file (`index.js`)
- Keeps the global namespace cleaner than placing everything in one script

### Key files (module)

- `module/js/math.js`
  - Exports:
    - `sum(x, y)`
    - `multiply(x, y)`
    - `subtract(x, y)`
    - `divide(x, y)`
- `module/js/index.js`
  - Imports the math utilities and logs the results

### Why it matters

This is the foundation of modern JavaScript organization. Modules make it easy to:

- separate concerns
- prevent global variable collisions
- reuse code across files
- support browser and Node ESM workflows

### Run the module example

From the repository root:

```bash
cd module
python -m http.server 3000
```

Then open:

```text
http://localhost:3000
```

Open the browser console to see output like:

```text
Sum 3
Subtract -1
Divide 0.5
Multiply 2
```

## 2) Singleton pattern

The `singleton/` directory demonstrates how to restrict a class or object to a single instance.

### What it does (singleton pattern)

- Prevents multiple instantiations of the same class
- Keeps one shared state or connection object
- Uses `Object.freeze()` to stop accidental mutation of the singleton instance

### Important implementation ideas

The examples in `singleton/index.js` and `singleton/example.js` show two approaches:

- class-based singleton
- object-based singleton

Both patterns enforce a single shared instance and can be used for things like:

- database connections
- shared application configuration
- logging services
- cached resource managers

### Example logic

The class-based version checks whether an instance already exists in the constructor and throws if a second one is attempted. The object is then frozen to prevent modification.

This pattern is useful when only one object should manage a process-wide resource, but it should be used carefully because it can also hide dependencies and make testing harder if overused.

## 3) Proxy pattern

The `proxy/` directory demonstrates JavaScript Proxy, which creates a wrapper around an object that can intercept reads, writes, and other operations.

### What it does (proxy pattern)

- intercepts property access via `get`
- intercepts assignments via `set`
- validates input before writing data
- can centralize cross-cutting concerns like validation, logging, and access control

### Key files (proxy)

- `proxy/index.js`
  - demonstrates a simple proxy around a person object
  - shows both direct property access and the `Reflect` API
- `proxy/example/index.js`
  - demonstrates validation for `email`, `username`, and `age`
- `proxy/example/validator.js`
  - contains reusable validation helpers:
    - `isValidEmail(email)`
    - `isAllLetters(char)`

### Why it matters (proxy)

Proxies are useful when you want object behavior to be controlled without changing the original object logic directly. Typical examples include:

- input validation
- data sanitization
- access control
- logging and debugging
- lazy loading and computed values

### Run the proxy validation example

From the repository root:

```bash
cd proxy/example
node index.js
```

The example validates assignments before they are allowed and throws an error when invalid values are provided.

## 4) Observer pattern

The `observer/` directory demonstrates a publish-subscribe relationship. A subject stores callback functions and notifies them whenever it publishes new data.

### What it does (observer pattern)

- Allows independent subscribers to react to the same event
- Decouples the publisher from each notification destination
- Supports subscribing and unsubscribing callbacks at runtime
- Keeps the shared observer API frozen with `Object.freeze()`

### Key files (observer)

- `observer/observer.js`
  - Exports a frozen shared subject
  - `subscribe(func)` registers a callback
  - `unsubscribe(func)` removes a callback
  - `notify(data)` sends data to all registered callbacks
- `observer/analytics.js`
  - Defines analytics subscribers
  - Automatically subscribes them to the shared subject on import
- `observer/index.js`
  - Imports the analytics subscribers
  - Publishes data immediately and again after a timeout
- `observer/example/index.html`
  - Provides the browser interface with pink and blue buttons
- `observer/example/index.js`
  - Reads button clicks and publishes button-specific events
- `observer/example/analytics.js`
  - Subscribes analytics handlers to browser events
- `observer/example/observer.js`
  - Contains the browser observer subject implementation

### Run the observer example

From the repository root:

```bash
cd observer
node index.js
```

The console displays one analytics message per subscriber for each notification. The example also demonstrates that subscribers remain registered between notifications.

### Run the browser observer example

From the repository root:

```bash
cd observer/example
npm start
```

Then open `http://localhost:3000`. Click the pink or blue button and open the browser console to see every analytics subscriber receive the corresponding event.

## Learning takeaways

This project offers a practical introduction to four foundational design patterns:

- Module pattern: organize code into reusable units
- Singleton pattern: enforce single shared instance semantics
- Proxy pattern: control object behavior at runtime
- Observer pattern: publish events to decoupled subscribers

Together, these examples help explain how JavaScript supports encapsulation, shared state control, and runtime interception in clear, educational code.

## Notes

This repository is intentionally small and example-focused. It is best used as a learning reference for understanding how these patterns work in JavaScript rather than as a production application structure.

The code demonstrates the pattern mechanics directly, which makes it useful for coursework, experimentation, and quick revision.
