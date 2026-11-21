import Observer from "./observer.js";

/**
 * Simulates sending event data to Google Analytics.
 * @param {*} data - Event data to report.
 * @returns {void}
 */
export function sendToGoogleAnalytics(data) {
  console.log("Sent to Google analytics: ", data);
}

/**
 * Simulates sending event data to a custom analytics service.
 * @param {*} data - Event data to report.
 * @returns {void}
 */
export function sendToCustomAnalytics(data) {
  console.log("Sent to custom analytics: ", data);
}

/**
 * Simulates sending event data to an email reporting service.
 * @param {*} data - Event data to report.
 * @returns {void}
 */
export function sendToEmail(data) {
  console.log("Sent to email: ", data);
}

Observer.subscribe(sendToGoogleAnalytics);
Observer.subscribe(sendToCustomAnalytics);
Observer.subscribe(sendToEmail);
