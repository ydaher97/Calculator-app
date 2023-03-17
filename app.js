import { Calculator } from "./calculator.js";
let operator = 0;
let negativeOperator = 0;
let digit = 0;
let decimal = 0;

const calculatorDisplay = document.getElementById("calculator-display");
const calculator = new Calculator(calculatorDisplay);

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");
const backButton = document.querySelector(".back");
const decimalButton = document.querySelector(".decimal");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.addToInput(button.value);
    digit = 1;
    console.log("button");
  });
});

decimalButton.addEventListener("click", () => {
  if (digit > 0 && decimal == 0) {
    calculator.addToInput(".");
    decimal = 1;
  }
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator === 0 && digit === 1) {
      calculator.addOperator(button.value);
      operator = 1;
      digit = 0;
      decimal = 0;
    } else if (operator === 1 && digit === 1) {
      calculator.calculate();
      calculator.addOperator(button.value);
      digit = 0;
      decimal = 0;
    } else if (operator === 1 && digit === 0) {
      calculator.back();
      calculator.addOperator(button.value);
    } else if (button.value == "-" && operator == 0 && negativeOperator == 0) {
      calculator.addOperator(button.value);
      negativeOperator = 1;
    }
  });
});

clearButton.addEventListener("click", () => {
  digit = 0;
  operator = 0;
  decimal = 0;
  calculator.clear();
});

equalsButton.addEventListener("click", () => {
  if (operator == 1 && digit == 1) {
    calculator.calculate();
    operator = 0;
    negativeOperator = 0;
    digit = 1;
    decimal = 0;
  }
});

backButton.addEventListener("click", () => {
  calculator.back();
  const display = calculatorDisplay.value;
  if (display.length > 0) {
    if (display[display.length - 1].match(/\d/)) {
      digit = 1;
    } else {
      digit = 0;
      operator = 0;
      decimal = 0;
    }
  } else {
    digit = 0;
    operator = 0;
    decimal = 0;
  }
});

//toggle theme
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  let element = document.body;
  element.classList.toggle("light-mode");
});

// Add keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key.match(/[0-9]/)) {
    calculator.addToInput(key);
    digit = 1;
  } else if (key.match(/[-+*/]/)) {
    if (operator === 0 && digit === 1) {
      calculator.addOperator(key);
      operator = 1;
      digit = 0;
      decimal = 0;
    } else if (operator === 1 && digit === 1) {
      calculator.calculate();
      calculator.addOperator(key);
      digit = 0;
      decimal = 0;
    } else if (operator === 1 && digit === 0) {
      calculator.back();
      calculator.addOperator(key);
    } else if (key == "-" && operator == 0 && negativeOperator == 0) {
      calculator.addOperator(key);
      negativeOperator = 1;
    }
  } else if (key === ".") {
    if (digit > 0 && decimal == 0) {
      calculator.addToInput(".");
      decimal = 1;
    }
  } else if (key === "Enter") {
    if (operator == 1 && digit == 1) {
      calculator.calculate();
      operator = 0;
      negativeOperator = 0;
      digit = 1;
      decimal = 0;
    }
  } else if (key === "Backspace") {
    calculator.back();
    const display = calculatorDisplay.value;
    if (display.length > 0) {
      if (display[display.length - 1].match(/\d/)) {
        digit = 1;
      } else {
        digit = 0;
        operator = 0;
        decimal = 0;
      }
    } else {
      digit = 0;
      operator = 0;
      decimal = 0;
    }
  } else if (key === "Escape") {
    digit = 0;
    operator = 0;
    decimal = 0;
    calculator.clear();
  }
});
