import { Calculator } from './calculator.js';
let operator = 0;

const calculatorDisplay = document.getElementById('calculator-display');
const calculator = new Calculator(calculatorDisplay);

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');
const backButton = document.querySelector('.back');

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.addToInput(button.value);
    console.log("button");
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.addOperator(button.value);
    calculator.calculateLongExpression();
    operator++;
    if (operator > 1) {
      calculator.addOperator(button.value);
      operator--;
    }
    console.log("op");
  });
});

clearButton.addEventListener('click', () => {
  operator = 0;
  calculator.clear();
});

equalsButton.addEventListener('click', () => {
  calculator.calculate();
  operator = 0;
});

backButton.addEventListener('click', () => {
    calculator.back();
    operator = 0;
  });