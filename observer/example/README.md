# Observer Browser Example

This browser example demonstrates the Observer pattern by publishing button-click events to analytics subscribers.

## Files

- `index.html` - Page markup and entry script
- `style.css` - Layout and button styles
- `index.js` - Handles pink and blue button clicks
- `observer.js` - Shared observer subject
- `analytics.js` - Analytics subscriber handlers

## Run

From this directory:

```bash
npm start
```

Open `http://localhost:3000` in a browser.

## Behavior

- Clicking the pink button publishes `🎀 Click on pink button! 🎀`.
- Clicking the blue button publishes `🦋 Click on blue button! 🦋`.
- Every subscribed analytics handler receives the event.
- Open the browser console to view the notifications.
