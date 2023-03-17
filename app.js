import { Calculator } from "./calculator.js";
let operator = 0;
let negativeOperator = 0;
let digit = 0;

const calculatorDisplay = document.getElementById("calculator-display");
const calculator = new Calculator(calculatorDisplay);

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");
const backButton = document.querySelector(".back");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.addToInput(button.value);
    digit = 1;
    console.log("button");
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator === 0 && digit === 1) {
      calculator.addOperator(button.value);
      operator = 1;
      digit = 0;
    } else if (operator === 1 && digit === 1) {
      console.log('s')
      calculator.calculate();
      calculator.addOperator(button.value);
      digit = 0;
    } else if (operator === 1 && digit === 0) {
      console.log('j')
      calculator.back();
      calculator.addOperator(button.value);
    } else if (button.value == '-' && operator == 0 && negativeOperator == 0) {
      calculator.addOperator(button.value);
      negativeOperator = 1;
    }
  });
});

clearButton.addEventListener("click", () => {
  digit = 0;
  operator = 0;
  negativeOperator = 0;
  calculator.clear();
});

equalsButton.addEventListener("click", () => {
  if (operator == 1 && digit == 1) {
    calculator.calculate();
    operator = 0;
    negativeOperator = 0;
    digit = 1;
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
    }
  } else {
    digit = 0;
    operator = 0;
    negativeOperator = 0;
  }
});

//toggle theme
const themeBtn = document.querySelector('.theme-btn')
themeBtn.addEventListener('click',()=>{
    let element = document.body;
    element.classList.toggle('light-mode')
})
