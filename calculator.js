export class Calculator {
    constructor(display) {
      this.display = display;
      this.clear();
    }
    
    clear() {
      this.input = '';
      this.operator = '';
      this.result = '';
      this.updateDisplay();
    }
    
    updateDisplay() {
      this.display.value = this.input;
    }
    
    addToInput(value) {
      this.input += value;
      this.updateDisplay();
    }
    
    addOperator(value) {
      this.operator = value;
      this.addToInput(this.operator);
    }
    
    operate(operator, a, b) {
      switch(operator) {
        case '+':
          return this.add(a, b);
        case '-':
          return this.subtract(a, b);
        case '*':
          return this.multiply(a, b);
        case '/':
          return this.divide(a, b);
        default:
          throw new Error("Invalid operator");
      }
    }
    
    calculate() {
      let values = this.input.split(/[-+*/]/);
      let result = parseFloat(values[0]);
    
      for (let i = 0; i < this.operator.length; i++) {
        let op = this.operator[i];
        let a = parseFloat(values[i]);
        let b = parseFloat(values[i+1]);
        result = this.operate(op, result, b);
      }
    
      this.result = result;
      this.input = this.result.toString();
      this.operator = '';
      this.updateDisplay();
    }
    
    add(a, b) {
      return a + b;
    }
    
    subtract(a, b) {
      return a - b;
    }
    
    multiply(a, b) {
      return a * b;
    }
    
    divide(a, b) {
      if (b === 0) {
        throw alert (`Cannot divide ${b} by 0`);
      } else if (a===0 && b === 0) {
        throw alert("Cannot divide 0 by 0");
      }
        else {
          return a / b;
      }
    }
  }