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
  num1 = Number(num1);
  num2 = Number(num2);
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
      if (num2 === 0) {
        return "Error";
      }
      return divide(num1, num2);
      break;
  }
}

// Create the functions that populate the display when you click the digit buttons. You should store the content of the display (the number) in a variable for use in the next step.

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let displayValue = "0";
let waitingForFirstOperand = true;
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;
let secondOperand = "0";

function populateDisplay () {
  display.textContent = displayValue;
}

function inputDigit (digit) { // number or .
  if (waitingForFirstOperand === true) {
    if (displayValue === "0" && digit != ".") {
      displayValue = digit; // prevent multiple leading zeros
    } else {
      displayValue += digit; // number or .
    }
  }
  else if (waitingForSecondOperand === true) {
      // 1. Build secondOperand string
      if (secondOperand === "0" && digit !== ".") {
        secondOperand = digit;
      } else if (secondOperand === "0" && digit === ".") {
          secondOperand = "0.";
      } else {
        secondOperand += digit;
      }
      
      // Block extra decimal points in the second number
      if (digit === "." && secondOperand.indexOf('.') !== secondOperand.lastIndexOf('.')) {
          secondOperand = secondOperand.substring(0, secondOperand.length - 1);
          return;
      }

      // 2. Reconstruct the full displayValue string (FirstNum + Op + SecondNum)
      let firstNumStr = String(firstOperand);
      displayValue = firstNumStr + operator + secondOperand;
    
  }
  else {
    resetCalculator();
    inputDigit(digit);
  }
  populateDisplay();
}

function inputOperator (oper) {
  if (firstOperand && operator && secondOperand) {
    let result = operate(firstOperand, operator, Number(secondOperand));
    firstOperand = result;
    displayValue = String(result);
    operator = oper;
    displayValue += oper;
    waitingForSecondOperand = true;
    secondOperand = "0";
    populateDisplay();
  }

  if (firstOperand === null) {
    firstOperand = Number(displayValue);
    waitingForFirstOperand = false;
  }

  if (waitingForFirstOperand === false && operator === null) {
    operator = oper;
    waitingForSecondOperand = true;

    displayValue += oper;
    populateDisplay();
  }
}

function handleOperation () {
  const result = operate(firstOperand, operator, Number(secondOperand));

  displayValue = String(result);
  waitingForSecondOperand = false;
  operator = null;
  firstOperand = Number(displayValue);
  secondOperand = "0";
  populateDisplay();
}

function resetCalculator () {
  displayValue = "0"
  waitingForFirstOperand = true;
  firstOperand = null;
  operator = null;
  waitingForSecondOperand = false;
  secondOperand = "0";

  populateDisplay();
}

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    const btn = e.target;

    if (btn.classList.contains('digit')) {
      const digit = btn.textContent;
      inputDigit(digit); // for numbers and .
    } else if (btn.classList.contains('op')) {
      const oper = btn.textContent;
      inputOperator(oper);
    } else if (btn.classList.contains('equal')) {
      handleOperation();
    } else if (btn.classList.contains('clr'))  {
      resetCalculator();
    }
  })
});

// initialize
populateDisplay()