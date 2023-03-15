import { Calculator } from './calculator.js';
let operator = 0;
let digit = 0;

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
    digit++;
    console.log("button");
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(operator)
    if (operator == 0) {
      calculator.addOperator(button.value);
      operator++;
    } 
    else if (operator == 1 && digit > 1){
      calculator.calculate();
      calculator.addOperator(button.value);   
      digit--;
    }
    console.log("op");
  });
});

clearButton.addEventListener('click', () => {
  digit = 0;
  operator = 0;
  calculator.clear();
});

equalsButton.addEventListener('click', () => {
  calculator.calculate();
  operator = 0;
  digit = 1;
});

backButton.addEventListener('click', () => {
  const display = calculatorDisplay.value;
  if ((display[display.length-1]).match(/\d/)) {
    digit--;
  } else {
    operator = 0;
  }
    calculator.back();
  });