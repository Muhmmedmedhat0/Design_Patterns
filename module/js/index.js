// Module is a reusable piece of code that can be imported and used in other parts of your application. It allows you to organize your code into smaller, manageable pieces, and helps to avoid naming conflicts by encapsulating variables and functions within a specific scope.

import { sum, subtract, divide, multiply } from "./math.js";
console.log("Sum", sum(1, 2));
console.log("Subtract", subtract(1, 2));
console.log("Divide", divide(1, 2));
console.log("Multiply", multiply(1, 2));
