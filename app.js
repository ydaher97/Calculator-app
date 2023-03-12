let display = document.getElementById('display');
      let input = '';
      let operator = '';
      let result = '';
      
      function addToDisplay(value) {
        input += value;
        display.value = input;
      }
      
      function addOperator(value) {
        operator = value;
        input += operator;
        display.value = input;
      }
      
      function clearDisplay() {
        input = '';
        operator = '';
        result = '';
        display.value = '';
      }
      
      function operate(operator, a, b) {
        switch(operator) {
          case '+':
            return add(a, b);
          case '-':
            return subtract(a, b);
          case '*':
            return multiply(a, b);
          case '/':
            return divide(a, b);
          default:
            return "Error: invalid operator";
        }
      }
      
      function calculate() {
        let values = input.split(/[-+*/]/);
        let result = parseInt(values[0]);
    
        for (let i = 0; i < operator.length; i++) {
        let op = operator[i];
        let a = parseInt(values[i]);
        let b = parseInt(values[i+1]);
        result = operate(op, result, b);
        }
    
        display.value = result;
    
        input = '';
        operator = '';
        result = '';
      }
      
      function add(a, b) {
        return a + b;
      }

      function subtract(a, b) {
        return a - b;
      }

      function multiply(a, b) {
        return a * b;
      }

      function divide(a, b) {
        if (b === 0) {
          return "Error: division by zero";
        } else {
          return a / b;
        }
      }