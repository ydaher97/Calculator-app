import { Calculator } from './calculator.js';

const calculatorDisplay = document.getElementById('calculator-display');
const calculator = new Calculator(calculatorDisplay);

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.addToInput(button.value);
    console.log("button");
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.addOperator(button.value);
    console.log("op");
  });
});

clearButton.addEventListener('click', () => {
  calculator.clear();
});

equalsButton.addEventListener('click', () => {
  calculator.calculate();
});