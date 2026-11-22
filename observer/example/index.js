import Observer from "./observer.js";
import "./analytics.js";

const pinkBtn = document.getElementById("pink-btn");
const blueBtn = document.getElementById("blue-btn");

if (!pinkBtn || !blueBtn) {
  throw new Error("Observer example buttons could not be found");
}

pinkBtn.addEventListener("click", () => {
  const data = "🎀 Click on pink button! 🎀";
  Observer.notify(data);
});

blueBtn.addEventListener("click", () => {
  const data = "🦋 Click on blue button! 🦋";
  Observer.notify(data);
});
