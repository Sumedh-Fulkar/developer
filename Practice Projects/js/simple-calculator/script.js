// creating functions for the following items and testing them in your browser’s console:
// add, subtract, multiply, divide

function add (a, b) {
  return a + b;
} 
function subtract (a, b) {
  return a - b;
}
function multiply (a, b) {
  return a * b;
}
function divide (a, b) {
  return a / b;
}

// function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.

function operate (num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
  }
}